
let tarefasPendentesUl = document.querySelector(".tarefas-pendentes");

function renderizaTarefasPendentes(tarefa) {
   
    let liTarefaPendente = document.createElement('li');
    liTarefaPendente.classList.add("tarefa");
    //liTarefaPendente.setAttribute('class', 'tarefa'); //Também é possível
    
    //@@@ Fazer sem o onclick primeiro....

    //PEGAR O TEMPLATE DO ARQUIVO !!

    //onclick="moverTarefaParaTerminada(${tarefaRecebida.id})"
    liTarefaPendente.innerHTML = 
    `
        <div class="not-done" id="${tarefa.id}" onclick="moverTarefaParaTerminada(${tarefa.id})"></div>
        <div class="descricao">
            <p class="nome">ID:${tarefa.id}</p>
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${tarefa.createdAt}</p>
        </div
    `
    //Adiciona a lista principal
    tarefasPendentesUl.appendChild(liTarefaPendente);
}

function moverTarefaParaTerminada(idTarefa) {

    console.log(idTarefa);
    let escolhaUsuario = confirm("Deseja realmente mover esta tarefa para as 'Tarefas Terminadas' ?");
    
    if (escolhaUsuario) {
        console.log(idTarefa);
    }
}