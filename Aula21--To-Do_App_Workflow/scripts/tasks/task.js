let tokenJwt;

//Executa automaticamente ao chamar a página tarefas.html
onload = function () {

    //Busca o token no Storage
    tokenJwt = sessionStorage.getItem("jwt");

    if (!tokenJwt) {
        /* Aqui estamos simulando uma validação de acesso à pagina */
        //Caso o token não exista no Storage
        window.location = "index.html"
    } else {
        //Caso o token seja válido...
        //Executa as outras ações...

        //Buscar os dados do usuário
        buscaDadosUsuario();
    }
}

async function buscaDadosUsuario() {

    try {

        //GET
        let resposta = await fetch(`${apiBaseURL()}/users/getMe`, {
            headers: {
                "authorization": tokenJwt
            }
        });

        if (resposta.status == 200 || resposta.status == 201) {
            let respostaJs = await resposta.json();

            //console.log(respostaJs);
            manipulaDadosUsuario(respostaJs);

        } else {
            throw "Ocorreu algum erro ao buscar o usuário"
        }


    } catch (error) {
        alert(error)
        console.log(error);
    }
}

let manipulaDadosUsuario = (dadosRecebidos) => {
    console.log(dadosRecebidos);

    let nomeUsuario = document.getElementById("nomeUsuario");
    //nomeUsuario
    nomeUsuario.innerText = `${dadosRecebidos.firstName} ${dadosRecebidos.lastName}`
}