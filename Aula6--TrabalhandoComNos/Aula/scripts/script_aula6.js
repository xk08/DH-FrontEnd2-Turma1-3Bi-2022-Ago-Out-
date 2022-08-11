//##### INTERAÇÃO COM A LISTA DE FELINOS
let elementoPai = document.getElementById("elementoPai");
let cards = document.querySelectorAll(".item");

console.log(elementoPai);
console.log(cards);

//Remoção de elementos HTML
elementoPai.removeChild(cards[2]);
elementoPai.removeChild(cards[3]);

//Outra forma de realizar a remoção
elementoPai.firstElementChild.remove();
elementoPai.lastElementChild.remove();

//Criando um novo elemento ou felino
let novaDiv =  document.createElement("div");
let textoDaDiv = document.createTextNode("Esse é o novo texto da div");
novaDiv.appendChild(textoDaDiv);

let titulo = "Novo Leão";
let descricao = "Reprehenderit officia cupidatat in labore cupidatat ea ipsum excepteur sint aliquip veniam sit. Aliqua non aliquip exercitation proident ut deserunt nisi sint occaecat enim adipisicing irure. Voluptate officia velit veniam voluptate labore nulla esse esse. Pariatur in laborum ullamco sit id commodo irure duis. Occaecat ex dolore esse veniam culpa duis."

novaDiv.innerHTML = 
`
      <img src="./imagens/leon.jpg">
      <h2>${titulo}</h2>
      <p>
        ${descricao}
      </p>
`

novaDiv.classList.add("item");
elementoPai.insertBefore(novaDiv, cards[3] );

elementoPai.appendChild(novaDiv);