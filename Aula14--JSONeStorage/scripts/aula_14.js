//Aula 14

/* Práticando os conceitos de Storage */

//Setando/Salvando novos itens
localStorage.setItem("1", 56);
localStorage.setItem("2", true);
localStorage.setItem("3","Valor 3");

//Atualizando um item já existente
localStorage.setItem("1", "Atualizou");

//Removendo um item
localStorage.removeItem("2");

//Buscando um item já existente
let valor1 = localStorage.getItem("1");
console.log(valor1);

//Limpando todos os registros do Storage
localStorage.clear();


/* Práticando a utilização de JSON no JS */

//Criando um objeto JS
let usuario = {
    nome: "Marcos",
    idade: 45,
    cidade: "São Paulo"
}

//Convertendo objeto JS -> Json (string)
let usuarioJson = JSON.stringify(usuario);
//console.log(usuarioJson);

//Salvando o objeto JSON no Storage
localStorage.setItem("id01", usuarioJson)

//Buscando objeto presente no Storage
let usuarioRetornoStorage = localStorage.getItem("id01");

//Convertendo o objeto JSON para JS
let usuarioRetornoStorageJs = JSON.parse(usuarioRetornoStorage)

console.log(usuarioRetornoStorageJs.nome);