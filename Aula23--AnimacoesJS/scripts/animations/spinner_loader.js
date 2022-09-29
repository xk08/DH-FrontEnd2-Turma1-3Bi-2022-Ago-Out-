function exibeSpinner() {

    let div = document.createElement("div");
    div.classList.add("loader")

    let botaoLogin = document.getElementById("botaoAcessarLogin");

    botaoLogin.innerText = ""
    botaoLogin.appendChild(div);
}

function ocultaSpinner() {

    let spinner = document.querySelector('.loader');

    let botaoLogin = document.getElementById("botaoAcessarLogin");

    botaoLogin.removeChild(spinner)

    botaoLogin.innerText = "Acessar"

}