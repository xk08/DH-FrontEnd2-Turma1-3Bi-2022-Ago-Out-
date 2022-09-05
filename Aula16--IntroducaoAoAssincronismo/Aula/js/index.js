/* Nesta aula vamos "simular" requisições assincronas para entender o conceito de promisses no JS */

/* Criando um novo objeto JS pro usuário */
let objetoUsuario = {
    login: "marcos@dh.com.br",
    senha: "12345"
}

/* Convertando o objeto para JSON */
let objetoUsuarioJson = JSON.stringify(objetoUsuario);


/* Criando uma nova promisse */
let validacao = true;

/* Estrutura de callbacks que recebe 2 funções */
let novaPromisse = new Promise(function (ressolve, reject) {

    setTimeout(() => { //Simulando que a requisição demorou
        if (validacao) {
            /* Executa a função no bloco then() e passa o resultado para seu retorno */
            ressolve(objetoUsuarioJson);
        } else {
            /* Executa a função no bloco catch() e passa o resultado para seu retorno */
            reject("A requisição teve algum problema");
        }
    }, 2500);

});

/* Resolvendo a promisse */
novaPromisse.then(
    function (resultado) {
        console.log("Primeiro Then");
        console.log(resultado);

        /* if(true){
            throw "Deu ruim na requisição!";
        } */
        return JSON.parse(resultado);
    }
).then(
    function (resultado) {
        console.log("Segundo Then");
        console.log(resultado);
    }
)

    .catch(
        function (erro) {
            console.log(erro);
        }
    );