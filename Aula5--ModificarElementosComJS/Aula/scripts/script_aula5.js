//@@@@@@ [1] - Modelos de texto  - Template Strings
let nome = "Marcos";
console.log(`O nome é: ${exibeNomeUsuario()}`);
function exibeNomeUsuario() {
    return nome;
}

//@@@@@@ [2] - Modificando elementos HTML com o DOM

let h1 = document.querySelector('h1');
h1.innerText = "Aula 5";
h1.innerHTML = "<h5>Aula 5</h5>"
console.log(h1.innerText);
console.log(h1.innerHTML);

//@@@@@@ [3] - Modificando os estilos (individuais)
let body = document.querySelector('body');
body.style.backgroundColor = "#3F90D2EF";
h1.style.fontSize = "100px";

//@@@@@@ [4] Modificando a classe dos elementos
let lis = document.querySelectorAll("li");
lis.forEach(function(li){
    console.log(li.innerText+"\n");
    li.classList.toggle("li-novo-aula-5");
})