/* Tipos de funções em JS */

//---------- @@ Função declarada ou declarativa
function soma(valor1, valor2) {
    return exibeResultado(valor1+valor2);
}
function exibeResultado(resultado) {
    console.log(resultado);
}

//Invocando/chamando/executando a função
soma(10, 5)

//---------- @@ Funções expressadas ou funções de expressão

funcaoSoma(); //NÃO é possivel chamar antes de existir sua assinatura

let funcaoSoma = function somar() {
    console.log("O resultado foi:");
}


//---------- @@ Funções de CallBacks (Função que recebe outra função como parametro e a executa)

let executaCalculo = function(funcaoRecebidaPorParametro) {

    //Executa a função recebida
    let resultado = funcaoRecebidaPorParametro(4, 6);
    console.log(resultado);
}

function somarValores3 (valor1, valor2) {
    return valor1+valor2;
}

function subtraiValores (valor1, valor2) {
    return valor1-valor2;
}

executaCalculo(subtraiValores);


//---------- @@ Funções de Seta (=>) ou ArrowFunctions
//Implementada no ECMAScript 6 em 2015
//Deixa o código menos verboso, ou seja, com menos linhas de código que fazem a mesma coisa

//Função comum
function somarValores2 (valor1, valor2) {
    return valor1+valor2;
}

//Função com arrow
let somarValores = (valor1, valor2) => console.log(valor1+valor2); //pode retirar a palavra function, o escopo e o retorno
somarValores(5,5);