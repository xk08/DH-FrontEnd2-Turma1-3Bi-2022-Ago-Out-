/* Professor Marcos Martins
    -> Possível solução para a mesa de trabalho da Aula 8 (Eventos)
*/

/* Capturando o botão de 'enviar' */
let btnEnviar = document.getElementById('botaoEnviar');

//2) Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
btnEnviar.addEventListener('click', evento => {
    console.log("O botão 'Enviar' foi clicado");
    evento.preventDefault();
});

//3) Mostre um alerta na página quando a tela terminar de ser carregada.
window.onload = function () {
    alert("A página foi totalmente carregada");
}

//4) Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
let tituloPagina = document.querySelector('h1');

tituloPagina.onmouseover = function () {
    tituloPagina.style.color = "#16A085";
}
tituloPagina.onmouseout = function () {
    tituloPagina.style.color = "#808080";
}

/* 5) Faça um trecho de código que utilize algum evento de teclado, 
esse evento irá escrever o conteúdo do input em uma tag <p> e 
logo abaixo o número de vezes que esse evento foi chamado.
 Exemplo: <p>futebol</p> <p>7</p> .*/

let contadorDeTeclas = 0;
let p = document.querySelector('p');

//Evento que analisa as teclas pressionadas
onkeydown = function () {
    contadorDeTeclas++;

    //Modficando o texto em tela apresentado pelo paragrafo
    p.innerText = `Total: ${contadorDeTeclas}`
}

//Bonus... Limpando o número de teclas pressionadas, ao clicar no botão de 'Resetar'
let btnResetar = document.getElementById('botaoResetar');
btnResetar.addEventListener('click', () => {
    contadorDeTeclas = 0;
    p.innerText = `Total: ${contadorDeTeclas}`
}
)