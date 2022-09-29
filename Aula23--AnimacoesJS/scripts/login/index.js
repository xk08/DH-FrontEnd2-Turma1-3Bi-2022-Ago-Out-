/* Captura os elementos do formulário de login */
let emailLogin = document.querySelector("#inputEmail");
let passwordLogin = document.querySelector("#inputPassword");
let botaoAcessarLogin = document.querySelector("#botaoAcessarLogin");


/* Altera as caracteristicas do botão acessar */
botaoAcessarLogin.style.backgroundColor = "#979292A1"
botaoAcessarLogin.innerText = "Bloqueado";

//Define um objeto JS para o usuário
let loginUsuario = {
    email: "",
    password: ""
}

/* Variáveis de controle para as validações do form de login */
let emailIsValid = false;
let passwordIsValid = false;

let minPasswordCaracteres = 4;

//Define um objeto JSON para o usuário
let loginUsuarioJson = "";

/* Adiciona um evento de click ao botão de acessar */
botaoAcessarLogin.addEventListener("click", async function (evento) {

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    passwordLogin = document.querySelector("#inputPassword");


    if (validaLogin()) {

        evento.preventDefault();

        /* Normalizando os inputs da tela de login */
        emailLogin = normalizaStringUsandoTrim(emailLogin.value);
        passwordLogin = normalizaStringUsandoTrim(passwordLogin.value);

        //Atribui as informações normalizadas ao objeto JS
        loginUsuario.email = emailLogin;
        loginUsuario.password = passwordLogin;

        //Converte o objeto JS para JSON
        loginUsuarioJson = JSON.stringify(loginUsuario);
        console.log("Objeto usuário em JSON\n");
        console.log(loginUsuarioJson);

        /* Chama a função que conecta com a API */
        loginAPI(loginUsuarioJson);
        //loginApiAsync(loginUsuarioJson);

    } else {
        console.log("Login inválido");
    }

});

function loginAPI(objetoUsuarioJson) {

    let configRequest = {
        method: "POST",
        body: objetoUsuarioJson,
        headers: {
            'Content-type': 'application/json'
        }
    }

    //Iniciando a animação
    exibeSpinner()



    fetch(`${apiBaseURL()}/users/login`, configRequest)
        .then(resultado => {

            /* Verifica status de sucesso na execução da promisse */
            if (resultado.status == 201 || resultado.status == 200) {
                return resultado.json();
            } else {
                /* Caso o status não seja sucesso, retorna uma exceção com todo o objeto do "erro" */
                throw resultado;
            }
        }
        ).then(
            resultado => {
                //Chama função ao obter sucesso no login
                loginSucesso(resultado);
            }
        ).catch(
            erro => {
                //Chama função ao obter algum erro
                loginErro(erro);
            }
        );
}

//Função asssincrona - //Async/Await
async function loginApiAsync(objetoUsuarioJson) {

    let configRequest = {
        method: "POST",
        body: objetoUsuarioJson,
        headers: {
            'Content-type': 'application/json'
        }
    }

    try {

        let resposta = await fetch(`${apiBaseURL()}/users/login`, configRequest)

        let respostaJS = await resposta.json();



    } catch (error) {
        console.log(error);
    }
}

function loginSucesso(respostaApi) {
    //console.log(respostaApi);

    setTimeout(() => {

        //Armazena o token no navegador
        sessionStorage.setItem("jwt", respostaApi.jwt)

        //Ocultando a animação
        ocultaSpinner();

        //Direciona o usuário para tela de tarefas
        window.location = "tarefas.html"



    }, 3000);


}

function loginErro(respostaApi) {

    //Verifica os status de "senha incorreta ou email incorreto"
    if (respostaApi.status == 400 || respostaApi.status == 404) {
        //Ao obter algum desses status, chama a função erro no login
        alert("Email e/ou senha inválidos");

        //Ocultando a animação
        ocultaSpinner();



    }
}

/* Verifica se ambas as informações do formulário de login foram validadas */
function validaLogin() {
    if (emailIsValid && passwordIsValid) {

        /* Ativa o botão de acesso novamente e retorna suas propriedades */
        botaoAcessarLogin.style.backgroundColor = "#7898FF"
        botaoAcessarLogin.innerText = "Acessar";
        botaoAcessarLogin.removeAttribute("disabled");
        return true;
    } else {
        /* Desabilita o botão de acesso e troca suas caracteristicas*/
        botaoAcessarLogin.style.backgroundColor = "#979292A1"
        botaoAcessarLogin.innerText = "Bloqueado";
        botaoAcessarLogin.setAttribute("disabled", true);
        return false;
    }
}

/* Validações no Input de EMAIL */
emailLogin.addEventListener("keyup", () => { //Possível também com o (blur)

    //Busca os valores atualizados dos inputs
    emailLogin = document.querySelector("#inputEmail");
    let emailValidacao = document.getElementById("emailValidacao");

    /* Alterando o texto do Small - Validando se o email tem um formato válido */
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLogin.value)) {
        emailValidacao.innerText = "E-mail inválido";

        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid #E9554EBB"
        emailIsValid = false;

    } else {
        emailValidacao.innerText = "";

        //Troca a cor da borda do input
        emailLogin.style.border = "2px solid transparent"
        emailIsValid = true;
    }
    /* Em caso de sucesso ou erro na validação, chama a função que valida o login*/
    validaLogin();
});

/* Validações no Input da SENHA */
passwordLogin.addEventListener("keyup", () => {

    //Busca os valores atualizados dos inputs
    passwordLogin = document.querySelector("#inputPassword");
    let passwordValidacao = document.getElementById("passwordValidacao");

    /* Alterandoo texto do Small - Verifica se o campo é nulo/vazio */
    if (passwordLogin.value.length <= minPasswordCaracteres) {
        passwordValidacao.innerText = `Faltam ${(minPasswordCaracteres + 1) - passwordLogin.value.length} caracteres`;

        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid #E9554EBB"
        passwordIsValid = false;

    } else {
        passwordValidacao.innerText = "";

        //Troca a cor da borda do input
        passwordLogin.style.border = "2px solid transparent"
        passwordIsValid = true;

    }
    validaLogin();
});