
let cookieJwt;
///@@@@@@ Executa automaticamente ao iniciar a página
onload = () => {
    cookieJwt = getCookie("jwt");
    //Simula uma validação se o usuário não estiver autenticado e autorizado
    if (!cookieJwt) {
        //alert("Você não tem permissão para usar esta página!\nVoltando para a tela de login...");
        window.location = "index.html"
    } else {
        buscaUsuarioNaApi(cookieJwt);
        buscaAsTarefasDoUsuario(cookieJwt);
    }
}

//@@@@ CARREGA E ALTERA DADOS DO USUÁRIO LOGADO
//Usando Async-Await
async function buscaUsuarioNaApi(tokenJwtArmazenado) {
    //console.log(tokenJwtArmazenado);
    let urlGetUsuario = `${baseUrlApi()}/users/getMe`;

    let configuracaoRequisicao = {
        //method: 'GET', //Pode omitir o GET da configuração
        //body: objetoUsuarioCadastroJson, //Não precisa de body
        headers: {
            'Authorization': `${tokenJwtArmazenado}`, // é OBRIGATORIO passar essa informação
        },
    };
    let resposta;
    let respostaJson
    try {
        resposta = await fetch(urlGetUsuario, configuracaoRequisicao);

        if (resposta.status == 200) {
            respostaJson = await resposta.json();
            //console.log(respostaJson);
            alteraDadosUsuarioEmTela(respostaJson);
        } else {
            throw resposta.status
        }
    } catch (error) {
        let escolhaUsuario = confirm("Ocorreu algum erro ao buscar as informações do usuário logado")
        console.log(error);
        if (escolhaUsuario) {
            buscaUsuarioNaApi(cookieJwt);
        }
    }
}

function alteraDadosUsuarioEmTela(objetoUsuarioRecebido) {
    let nomeUsuarioEmTarefas = document.getElementById('nomeUsuarioEmTarefas');
    nomeUsuarioEmTarefas.innerText = `${objetoUsuarioRecebido.firstName} ${objetoUsuarioRecebido.lastName}`;
}

////@@@@ BUSCANDO TODAS AS TAREFAS DO USUÁRIO LOGADO
function buscaAsTarefasDoUsuario(tokenJwtArmazenado) {
    let urlGetTarefas = `${baseUrlApi()}/tasks`;
    let configuracaoRequisicao = {
        headers: {
            'Authorization': `${tokenJwtArmazenado}`, // é OBRIGATORIO passar essa informação
        },
    };

    renderizarSkeletons(3, ".tarefas-pendentes");
    renderizarSkeletons(3, ".tarefas-terminadas");

    fetch(urlGetTarefas, configuracaoRequisicao).then(
        resultado => {
            if (resultado.status == 200) {
                return resultado.json();
            }
            throw resultado.status;
        }
    ).then(
        resultado => {
            manipulandoTarefasUsuario(resultado);
        }
    ).catch(
        erros => {
            removerSkeleton(".tarefas-pendentes");
            removerSkeleton(".tarefas-terminadas");

            console.log(erros);
        }
    );
}

function manipulandoTarefasUsuario(listaDeTarefas) {

    removerSkeleton(".tarefas-pendentes");
    removerSkeleton(".tarefas-terminadas");

    //Se a lista de tarefas retornar vazia da api...
    if (listaDeTarefas.length == 0) {
        nenhumaTarefaPendenteEncontrada();
        //Se retornar algum registro da API...
    } else {

        //Ordenando a lista recebida da API
        listaDeTarefas = listaDeTarefas.sort(function (a, b) {
            return a.description.localeCompare(b.description);
        });

        listaDeTarefas.map(tarefa => {
            if (tarefa.completed) {
                renderizaTarefasConcluidas(tarefa);
            } else {
                renderizaTarefasPendentes(tarefa);
            }
        });

    }

}

///@@@@@@ CADASTRANDO UMA NOVA TAREFA PARA O USUÁRIO LOGADO
let botaoCadastrar = document.getElementById("botaoTarefas");

botaoCadastrar.addEventListener('click', evento => {
    evento.preventDefault(); //Impede que a página atualize automaticamente e não faça o envio da request

    let descricaoTarefa = document.getElementById('novaTarefa');
    let radioGrupo = document.getElementsByName('grupoRadio');
    let radioSelecionado;
    if (descricaoTarefa.value != "") {

        //Verifica qual foi o radio selecionado e armazena em uma variável
        radioGrupo.forEach(radio => radioSelecionado = radio.checked);

        //Cria objeto JS que será convertido para JSON
        const objetoTarefa = {
            description: descricaoTarefa.value,
            completed: radioSelecionado
        }

        let objetoTarefaJson = JSON.stringify(objetoTarefa);

        ///@@ Comunicando com a API
        let endPointCriarNovaTarfa = `${baseUrlApi()}/tasks`;

        let configuracoesRequisicao = {
            method: 'POST',
            body: objetoTarefaJson,
            headers: {
                // Precisa passar ambas propriedades pro Headers da requisição
                'Content-type': 'application/json', //responsável elo json no Body
                'Authorization': `${cookieJwt}` //responsável pela autorização (vem do cookie)
            },
        }

        //@@@Chamando a API
        fetch(endPointCriarNovaTarfa, configuracoesRequisicao)
            .then((response) => {
                if (response.status == 201) {
                    return response.json()
                }
                //Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() 
                throw response;
            }).then(function () {
                alert("A tarefa foi salva com sucesso!")
                //Recarrega a página para atualiza a lista com a "nova" tarefa cadastrada
                window.location.reload();
            })
            .catch(error => {
                loginErro(error)
            });
    } else {
        evento.preventDefault();
        alert("Você deve informar uma descrição para a tarefa")
    }
});

///@@@ ATUALIZAR TAREFA, ALTERANDO SEU STATUS 
function atualizaTarefa(idTarefa, status, tokenJwt) {

    let endPointEditarTarefa = `${baseUrlApi()}/tasks/${idTarefa}`;
    let configuracoesRequisicao = {
        method: 'PUT',
        body: JSON.stringify(
            {
                completed: status
            }
        ),
        headers: {
            // Preciso passar ambas propriedade pro Headers da requisição
            'Content-type': 'application/json', //responsável elo json no Body
            'Authorization': tokenJwt //responsável pela autorização (vem do cookie)
        },
    }

    //@@@Chamando a API
    fetch(endPointEditarTarefa, configuracoesRequisicao)
        .then((response) => {
            if (response.status == 200) {
                return response.json()
            }
            //Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() 
            throw response;
        }).then(function () {
            alert("A tarefa foi atualizada com sucesso!")
            //Recarrega a página para atualiza a lista com a "nova" tarefa cadastrada
            window.location.reload();
        })
        .catch(error => {
            loginErro(error)
        });
}

///@@@ DELETAR UMA TAREFA POR SEU ID
function deletarTarefa(idTarefa, tokenJwt) {

    let endPointDeletarTarefa = `${baseUrlApi()}/tasks/${idTarefa}`;
    let configuracoesRequisicao = {
        method: 'DELETE',
        headers: {
            'Authorization': tokenJwt //responsável pela autorização (vem do cookie)
        },
    }

    //@@@Chamando a API
    fetch(endPointDeletarTarefa, configuracoesRequisicao)
        .then((resposta) => {
            if (resposta.status == 200) {
                return resposta.json()
            }
            //Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() 
            throw resposta;
        }).then(function () {
            alert("A tarefa foi deletada com sucesso!")
            //Recarrega a página para atualiza a lista com a "nova" tarefa cadastrada
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
}

function encerrarSessao() {

    /* Utilizando a função de alerta da biblioteca */
    Swal.fire({
        title: 'Sair da aplicação',
        text: "Deseja realmente sair?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
    }).then((result) => {
        if (result.isConfirmed) {
            //Setar uma data anterior, remove(deleta) o cookie do navegador
            document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            //Direciona para a tela de login
            window.location = "index.html"
        }
    })
}