/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');


/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTemaComToggle() {

    let itemsList = document.querySelectorAll('.item');

    /* Adicionando as classes (dark-mode) css nos elementos capturados */
    body.classList.toggle('body-dark');
    h1.classList.toggle('h1-dark');
    //2) Percorrendo com o ForEach
    itemsList.forEach(item => {
        item.classList.toggle('items-dark');
        item.classList.toggle('items-text-dark');
    });
}

//ADICIONAR E REMOVE a classe dark dos elementos (Usando o toggle do input no HTML)
function alteraTemaSemToggle() {
    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */

        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        /* ABAIXO SÃO APRESENTADAS:
            3 Formas distintas de se incluir os novos estilos nos elementos da página */

        //1) Utilizando For..Of
        /*  for (let item of itemsList) {
             item.classList.add('items-dark')
             item.classList.add('items-text-dark')
         } */

        //2) Percorrendo com o ForEach
        itemsList.forEach(item => {
            item.classList.add('items-dark');
        });

        /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai (Mais verbosa)
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */


    } else { //Caso seja false, ou seja, não está selecionado

        /* Remove as classes adicionadas anteriormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}