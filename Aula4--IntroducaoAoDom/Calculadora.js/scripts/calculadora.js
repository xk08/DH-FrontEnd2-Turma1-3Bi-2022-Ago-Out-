/* Professor Marcos Martins - Front end 2 - Digital House 
Possível solução para a atividade da Aula 3 */

//Importando as funções necessárias dos outros scripts do projeto
import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'

//números que serão calculados (Informados pelo usuário na pagina HTML)
let primeiroNumero = prompt("Informe o primeiro número: ");
let segundoNumero = prompt("Informe o segundo número: ");

//Somando e exibindo o resultado
let resultadoSoma = somar(primeiroNumero, segundoNumero);
console.log("Resultado soma: " + resultadoSoma);

//Subraindo e exibindo o resultado
let resultadoSubtracao = subtrair(primeiroNumero, segundoNumero);
console.log("Resultado subtração: " + resultadoSubtracao);

//Multiplicando e exibindo o resultado
let resultadoMultiplicacao = multiplicar(primeiroNumero, segundoNumero);
console.log("Resultado multiplicação: " + resultadoMultiplicacao);

//Multiplicando e exibindo o resultado
let resultadoDivisao = dividir(primeiroNumero, segundoNumero);
console.log("Resultado divisão: " + resultadoDivisao);

//Exibe em tela os resultados para o usuário
alert(`Resultado soma: ${resultadoSoma}\n
Resultado subtração: ${resultadoSubtracao}\n
Resultado multiplicação: ${resultadoMultiplicacao}\n
Resultado divisão: ${resultadoDivisao}`);