/* NESTA AULA, FAREMOS APENAS A CAPTURA DAS INFORMAÇÕES DO HTML, 
SEM MODIFICAR OU ADICIONAR E REMOVER ELEMENTOS 
-> Nas proximas aulas, faremos a alteração de alguns elementos e suas propriedades*/


console.log(document.body.children[1].children[1].children[0].children[0].childNodes[0].data);

let item1 = document.getElementById("item1");
let item1 = document.querySelector("#item1");
console.log(item1.innerText);

//QuerySelector
let lis = document.querySelectorAll("li");
let lis = document.querySelector("li");
console.log(lis[2]);

let buscaPelaClasse = document.querySelector(".animado");
console.log(buscaPelaClasse);

let outraForma = document.getElementsByClassName("conteudo")
console.log(outraForma);

let articles = document.querySelectorAll("article");
console.log(articles);

let cardSelecionado;

for ( let article of articles) {
    console.log(article.id);

    if (article.id == "card1") {
        cardSelecionado = article;
    }
}

console.log(cardSelecionado);