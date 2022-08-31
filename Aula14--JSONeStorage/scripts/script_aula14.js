/* Objetivo: Capturar as informações vindas do HTML e obter os valores com o JS */


let nomeCapturado = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");

let email = document.getElementById("email");

let checkbox = document.getElementById("checkbox");

let listaItens = document.getElementById("listaItens");


let botaoCapturado = document.getElementById("salvar");

//Capturando os radio buttons
let radioButtons = document.getElementsByName("radioGrupo");

//console.log(nomeCapturado);

botaoCapturado.addEventListener("click", function (evento) {

  if (nomeCapturado.value) {
    evento.preventDefault();

    /*  console.log("Exibindo informações do usuário\n");
     console.log(`Nome: ${nomeCapturado.value} `);
     console.log(`Idade: ${idade.value} `);
     console.log(`Altura: ${altura.value} `);
     
     //Lista de itens
     console.log(`Lista de itens: ${listaItens.value} `);

     //Checkbox
     console.log(`Checkbox: ${checkbox.value} `);
      */
    //RadioButons

    //let radioSelecionado;

    radioButtons.forEach(radio => {
      //console.log(`RadioButton: ${radio.checked} `);

      if (radio.checked) {
        //radioSelecionado = radio;
      }
    });

    //console.log(radioSelecionado.value);

  }

  normalizandoDados(nomeCapturado.value);

});

/* Objetivo da aula 12: Conhecer e praticar algumas normalizações em JS */

function normalizandoDados(nomeRecebido) {

  //TRIM (Retira espaços inicias e finais)
  let textoSemEspaco = retiraEspacos(nomeRecebido);
  console.log(`Com espaços: ${nomeRecebido}`);
  console.log(`Sem espaços: ${textoSemEspaco}`);

  let nomeNormalizado = transformaEmMaiusculas(textoSemEspaco);
  console.log(nomeNormalizado);

  //SPLIT (Fragmenta uma informação em um Array)
  let novoNome = nomeNormalizado.split(" ");
  console.log(novoNome);

  //REPLACE
  let emailNormalizado = altura.value.replaceAll(".", ",").replaceAll("1", "!");
  console.log(emailNormalizado);

}

function retiraEspacos(recebeTexto) {
  return recebeTexto.trim();
}

function transformaEmMaiusculas(recebeTexto) {
  return recebeTexto.toUpperCase();
}

function transformaEmMinusculas(recebeTexto) {
  return recebeTexto.toLowerCase();
}


/* Objetivo da aula 13: Realizar algumas validações nos campos do formulário*/

nomeCapturado.addEventListener("focus", function () {
  console.log("O campo foi selecionado");

  nomeCapturado.style.backgroundColor = "#DDD8D8"
})

nomeCapturado.addEventListener("keyup", function () {
  console.log("O campo foi selecionado");

  let nomeValidacao = document.getElementById("nomeValidacao");

  nomeCapturado.style.backgroundColor = "#FFFFFF"

  if (nomeCapturado.value.length > 5) {

    nomeCapturado.style.backgroundColor = "#84D773B5"
    nomeValidacao.innerText = ""

    //Habilitando o botão de salvar
    botaoCapturado.removeAttribute("disabled")

  } else {

    nomeValidacao.innerText = "O campo deve possuir ao menos 5 caractares"
    nomeCapturado.style.backgroundColor = "#ED6256B5"

    nomeValidacao.style.color = "#E81F1FEC"
    nomeValidacao.style.fontWeight = "bold"

    //Habilitando o botão de salvar
    botaoCapturado.setAttribute("disabled", "true")

  }
})

//Validando o email

email.addEventListener("focus", function () {
  console.log("O campo foi selecionado");
  email.style.backgroundColor = "#DDD8D8"
})

email.addEventListener("keyup", function () {
  console.log("O campo foi selecionado");

  let emailValidacao = document.getElementById("emailValidacao");

  email.style.backgroundColor = "#FFFFFF"

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

    email.style.backgroundColor = "#84D773B5"
    emailValidacao.innerText = ""

    //Habilitando o botão de salvar
    botaoCapturado.removeAttribute("disabled")

  } else {

    emailValidacao.innerText = "O email deve ser um formato válido"
    email.style.backgroundColor = "#ED6256B5"

    emailValidacao.style.color = "#E81F1FEC"
    emailValidacao.style.fontWeight = "bold"

    //Habilitando o botão de salvar
    botaoCapturado.setAttribute("disabled", "true")

  }
})

/* Objetivo da aula 14: Conhecer e praticar alguns cocneitos sobre JSON e Storage */