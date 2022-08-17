/*
Principais tipos de eventos que temos:
- Eventos de janela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado
*/

///@@@@Eventos de janela/pagina

//Evento automático
onload = function(){
    exibeAlerta();
}

function exibeAlerta() {
    alert("Usuário acessou a pagina");
}

function exibeIdadeUsuario() {
    let idadeInformada = document.getElementById("textIdade");
    console.log(idadeInformada.value); //Exibe o valor presente no campo
}


///@@@@ Eventos do mouse (onClick)

let botaoEnviar = document.getElementById("botaoEnviar");

console.log(botaoEnviar);

// evento como propriedade
botaoEnviar.onclick = function() {
    console.log("O botão foi clicado");
}

//Evento de click, usando listner e callbacks
botaoEnviar.addEventListener("click", function(event){
    console.log("Clicouuuu");
    event.preventDefault(); //Impedindo a página de recarregar
});

///@@@@ Eventos do mouse, além do onClick
botaoEnviar.onmouseover = function(){
    console.log("Em cima do botão");
    setTimeout(() => {
        botaoEnviar.style.width = "50%"
    }, 500);

}
botaoEnviar.onmouseout = function(){
    console.log("saiu do botão");
    botaoEnviar.style.width = "10%"
}

///@@@@ Eventos de teclado
window.onkeyup = function (evento) {
    console.log(evento);
    console.log(`A tecla ${evento.key} foi pressionada`);
}