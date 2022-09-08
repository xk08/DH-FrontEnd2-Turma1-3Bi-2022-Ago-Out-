let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

botaoPesquisar.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (quantidadeFormulario.value != "") {
        //Método GET 
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`
        ).then(
            function (resultado) {
                return resultado.json();
            }
        ).then(
            function (resultado) {

                /* Percorrendo a lista de elementos recebidos pela API
                    Os elementos do Array estão dentro de um objeto chamado "message" */
                resultado.message.forEach(item => {

                    /* Criando um novo elemento (img) no JS */
                    let img = document.createElement("img");
                    img.src = item; //Informa o SRC para o elemento
                    exibeResultado.appendChild(img); //Adiciona ao elemento pai
                })
            }
        )
            .catch(
                function (erro) {
                    console.log(erro);
                }
            );
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}