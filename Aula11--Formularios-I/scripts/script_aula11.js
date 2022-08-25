/* Objetivo: Capturar as informações vindas do HTML e obter os valores com o JS */


let nomeCapturado = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");
let bio = document.getElementById("biografia");

let checkbox = document.getElementById("checkbox");

let listaItens = document.getElementById("listaItens");


let botaoCapturado = document.getElementById("salvar");

//Capturando os radio buttons
let radioButtons = document.getElementsByName("radioGrupo");

//console.log(nomeCapturado);

botaoCapturado.addEventListener("click", function(evento){

   if(nomeCapturado.value) {
       evento.preventDefault();

       console.log("Exibindo informações do usuário\n");
       console.log(`Nome: ${nomeCapturado.value} `);
       console.log(`Idade: ${idade.value} `);
       console.log(`Altura: ${altura.value} `);
       console.log(`Biografia: ${bio.value} `);
       
       //Lista de itens
       console.log(`Lista de itens: ${listaItens.value} `);

       //Checkbox
       console.log(`Checkbox: ${checkbox.value} `);
       
       //RadioButons

       let radioSelecionado;
       
       radioButtons.forEach(radio => {
           console.log(`RadioButton: ${radio.checked} `);

           if (radio.checked) {
             radioSelecionado = radio;
           }
       });

       console.log(radioSelecionado.value);

   }

});
