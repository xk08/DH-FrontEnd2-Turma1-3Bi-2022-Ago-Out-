/* AULA 1 - BOAS-VINDAS AO JS */

let nome = "Marcos";
let idade = 24;

//Concatenado
console.log("Olá meu nome é " + nome + " tenho " + idade + " anos");

//Declarando array de nomes
let nomes = ["Braulio", "Rebeca", "Cauê"];

//Percorrendo o array para acessar/iterar sobre elementos
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]); //exibe o nome em cada posição do array
}