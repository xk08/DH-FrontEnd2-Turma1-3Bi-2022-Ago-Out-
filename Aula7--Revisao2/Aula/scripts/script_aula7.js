// Queremos interagir/alterar os atributos de um elemento HTML.

/* Buscando uma informação que esta em um array(dúvida da ultima aula) */
let h2Dom = document.querySelectorAll("h2");
let h2NovoArray = Array.from(h2Dom);
let h2BuscaFelino = h2NovoArray.filter(h2  => h2.innerText == "O leopardo");
console.log(h2BuscaFelino);

/* Manipulando attributos com o JS */

let imgs = document.querySelectorAll("img");
console.log(imgs);

let i = 0;

imgs.forEach(function(img){

    console.log(img.attributes);

    //Verifica se existe determinado atributo no elemento
    console.log(img.hasAttribute("novo"));

    //Removendo atributo
    img.removeAttribute("srfdfgc");

    //Criando novos atributos
    img.setAttribute("id", i++); //Criando um identificador
    console.log(img.id);

    img.setAttribute("class", "nova-classe"); //Criando uma nova classe
    img.classList.add("nova-classe"); //Equivalente a fazer com "classList"

    //Quando o elemento já existe, sobreescre (faz a atualização)
    img.setAttribute("src", "novoS")

    //Capturando um determinado atributo
     let atributoCapturado = img.getAttribute("id");
     console.log(atributoCapturado);
});

/* Acrescentando uma ancora (link a) em um determinado Card */
console.log(imgs[1]);
let card = imgs[1].parentElement; //Capturando o elemento pai de IMG 
console.log(card);

let a = document.createElement("a");
a.innerText = "Clique aqui para ver mais informações";

a.setAttribute("href", "https://www.ikoporan.org/pt-br/voluntariado/conservacao-de-leoes/")
a.setAttribute("target", "_blank")

card.appendChild(a); //Adiciona ao elemento pai