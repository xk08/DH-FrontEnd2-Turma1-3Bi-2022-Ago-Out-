/* Variáveis globais ao escopo do JS */

//Captura as entradas de dados e ações do usuário na página de cadastro
let campoNomeCadastro = document.getElementById("inputNomeCadastro");
let campoSobrenomeCadastro = document.getElementById("inputSobrenomeCadastro");
let campoEmailCadastro = document.getElementById("inputEmailCadastro");
let campoSenhaCadastro = document.getElementById("inputSenhaCadastro");
let campoRepetirSenhaCadastro = document.getElementById("inputRepetirSenhaCadastro");

let botaoCriarConta = document.getElementById("botaoCriarContaCadastro");

const usuarioObjetoCadastro = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

botaoCriarConta.addEventListener('click', evento => {
    evento.preventDefault();

    let inputCPF = document.getElementById("inputCPF");
    let inputDataNascimento = document.getElementById("inputDataNascimento");

    console.log(inputCPF.value);
    console.log(inputDataNascimento.value);


    //Faz as normalizações e validações

    //Verifica se todos os campos estão preenchidos
    if (campoNomeCadastro.value != "" && campoSenhaCadastro.value != "" &&
        campoEmailCadastro.value != "" && campoSenhaCadastro.value != "" &&
        campoRepetirSenhaCadastro.value != "") {

        //Poem as informações da tela no objeto
        usuarioObjetoCadastro.firstName = campoNomeCadastro.value;
        usuarioObjetoCadastro.lastName = campoSobrenomeCadastro.value;
        usuarioObjetoCadastro.email = campoEmailCadastro.value;
        usuarioObjetoCadastro.password = campoSenhaCadastro.value;

        let objetoUsuarioCadastroJson = JSON.stringify(usuarioObjetoCadastro);

        let configuracaoRequisicao = {
            method: 'POST',
            body: objetoUsuarioCadastroJson,
            headers: {
                'Content-type': 'application/json',
            },
        };

        //Chamando a API
        fetch(`${baseUrlApi()}/users`, configuracaoRequisicao)
            .then((response) => {
                if (response.status == 201) {
                    return response.json()
                }
                /* Se o código for diferente de sucesso (201), lança um throw para que a execução caia no Catch() */
                throw response;
            }).then(function (resposta) {
                cadastroSucesso(resposta.jwt)
            })
            .catch(error => {
                cadastroErro(error)
            });
    } else {
        alert("Todos os campos devem ser preenchidos para que possa prosseguir")
    }
});

/*  Ao obter o sucesso, recebe o json (token) do usuário*/
function cadastroSucesso(jsonRecebido) {
    console.log("Json recebido ao cadastrar");
    console.log(jsonRecebido);
    alert("Usuário cadastrado com sucesso")
    window.location = "index.html"
}

function cadastroErro(statusRecebido) {
    console.log("Erro ao cadastrar");
    console.log(statusRecebido);
}