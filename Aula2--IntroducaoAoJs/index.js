/* AULA 2 - INTRODUÇÃO AO JS */

/// ALERT()
let usuario = "Marcos";

alert("Seja bem-vindo: " + usuario);

/// CONFIRM()
let retorno = confirm("Tem certeza que deseja sair?");
console.log(retorno);

if (retorno) {
    alert("O usuário será deslogado");
} else {
    alert("Continua utilizando...");
}

let numero = 10;

/// PROMPT()
let numeroRecebido = prompt("Insira um número inteiro: ");
console.log(numeroRecebido);

/// CONVERSÕES COM PARSE()
let numeroConvertido = parseInt(numeroRecebido);
let numeroConvertido = parseFloat(numeroRecebido);
let numeroConvertido = Number(numeroRecebido);

let resultado = numero + numeroConvertido;
console.log(resultado);

/// OPERAÇÕES MATEMÁTICAS + NÚMERO ALEATORIO()
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = getRandomIntInclusive(1, 7);
console.log(numeroAleatorio);

/* MESA DE TRABALHO */
/*  
    1) Capturar a escolha do jogador: prompt
        1, 2 ou 3 ?
    2) Capturar a escolha da máquina: Math
        1, 2 ou 3 ?
    3) Testar (Switch,IF) quem ganhou a rodada
        Guardar em variáveis separadas, quem ganhou cada rodada
    4) Elegem o ganhador a partida
        Melhor de 2 rodadas
*/