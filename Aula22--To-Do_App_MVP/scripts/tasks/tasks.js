let tokenJwt;

//Executa automaticamente ao chamar a página tarefas.html
onload = function () {

    //Busca o token no Storage
    tokenJwt = sessionStorage.getItem("jwt");

    if (!tokenJwt) {
        //Caso o token seja inválido....
        window.location = "index.html"
    } else {
        //Caso o token seja válido...
        
        //Executa as outras ações automáticas necessárias
        buscaDadosUsuario();

        //Chama o método que lista todas as tarefas
        buscaTarefas();
    }
}

/* Cria uma função assincrona para fazer a requisição */
async function buscaDadosUsuario() {

    let configRequest = {
        //Passo apenas o cabeçalho, pois já sabe que é GET
        headers:
            { "authorization": tokenJwt }
    }

    try {
        let respostaApi = await fetch(`${apiBaseURL()}/users/getMe`, configRequest);

        if (respostaApi.status == 200) {
            let respostaFinal = await respostaApi.json();
            //console.log(respostaFinal);

            modificaUsuarioDom(respostaFinal);

        } else {
            throw "Ocorreu algum erro ao buscar o usuário !";
        }
    } catch (error) {
        alert(error);
    }
}

/* BUSCA AS TAREFAS DO USUÁRIO LOGADO */
async function buscaTarefas() {

    let configRequest = {
        //Passo apenas o cabeçalho, pois já sabe que é GET
        headers:
            { "authorization": tokenJwt }
    }

    try {
        let respostaApi = await fetch(`${apiBaseURL()}/tasks`, configRequest);

        if (respostaApi.status == 200) {
            let respostaFinal = await respostaApi.json();

            manipulaListaTarefas(respostaFinal);

        } else {
            throw "Ocorreu algum erro ao buscar as tarefas do usuário!";
        }
    } catch (error) {
        alert(error);
    }
}

let modificaUsuarioDom = (dadosUsuario) => {
    //Captura a variável para a manipulação do DOM
    let nomeUsuario = document.getElementById("nomeUsuario");

    //Altera o nome do usuário em tela
    nomeUsuario.innerText = `${dadosUsuario.firstName} ${dadosUsuario.lastName}`
    }

//LISTA TODAS AS TAREFAS
let manipulaListaTarefas = (tarefas) => {
    console.log(tarefas);
}

// CADASTRANDO UMA NOVA TAREFA
let botaoCadastrar = document.getElementById("botaoTarefas");

botaoCadastrar.addEventListener('click', evento => {

    evento.preventDefault();
    
    let descricaoTarefa = document.getElementById('novaTarefa');
    let radioGrupo = document.getElementsByName('grupoRadio');
    let radioSelecionado;
    
    /* Validação simples */
    if (descricaoTarefa.value != "") {

        //Verifica qual foi o radio selecionado e armazena em uma variável
        radioGrupo.forEach(radio => radioSelecionado = radio.checked);

        //Cria objeto JS que será convertido para JSON
        const objetoTarefa = {
            description: descricaoTarefa.value,
            completed: radioSelecionado
        }

        let objetoTarefaJson = JSON.stringify(objetoTarefa);

        let configuracoesRequisicao = {
            method: 'POST',
            body: objetoTarefaJson,
            headers: {
                // Preciso passar ambas propriedade pro Headers da requisição
                'Content-type': 'application/json', //responsável elo json no Body
                'Authorization': `${tokenJwt}` //responsável pela autorização (vem do Storage/jwt)
            },
        }

        //@@@Chamando a API
        fetch(`${apiBaseURL()}/tasks`, configuracoesRequisicao)
            .then((response) => {
                if (response.status == 201) {
                    return response.json()
                }
                //Se o código for diferente de sucesso (201), lança um throw para que a execução caia no bloco Catch() 
                throw response;
            }).then(resposta => {
                tarefaSucesso(resposta)
            })
            .catch(error => {
                tarefaErro(error)
            });
    } else {
        evento.preventDefault();
        alert("Você deve informar uma descrição para a tarefa")
    }
});

let tarefaSucesso = (resposta) => {
    alert("A tarefa foi cadastrada!");
    console.log(resposta);
}

let tarefaErro = (erro) => {
    alert("Ocorreu algum erro ao cadastrar a tarefa!");
    console.log(erro);
}

