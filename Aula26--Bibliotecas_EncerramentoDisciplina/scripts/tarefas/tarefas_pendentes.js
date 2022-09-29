let tarefasPendentesUl = document.querySelector(".tarefas-pendentes");


function renderizaTarefasPendentes(tarefaRecebida) {

    //Converte a data de TimeStamp Americadno, para Data na formatação PT-BR
    var dataTarefa = new Date(tarefaRecebida.createdAt).toLocaleDateString("pt-BR")

    let liTarefaPendente = document.createElement('li');
    liTarefaPendente.classList.add("tarefa");
    //liTarefaPendente.setAttribute('class', 'tarefa'); //Também é possível


    //Utilizando o "onclick"
    // <div class="not-done" id="${tarefaRecebida.id}" onclick="moverTarefaParaTerminada(${tarefaRecebida.id})"></div>
    liTarefaPendente.innerHTML =
        `
        <div class="not-done" id="${tarefaRecebida.id}" onclick="moverTarefaParaTerminada(${tarefaRecebida.id})"></div>
        <div class="descricao">
            <p class="nome">ID:${tarefaRecebida.id}</p>
            <p class="nome">${tarefaRecebida.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${dataTarefa}</p>
        </div
    `
    //Adiciona a lista principal
    tarefasPendentesUl.appendChild(liTarefaPendente);
}

function moverTarefaParaTerminada(idTarefa) {
    let escolhaUsuario = confirm("Deseja realmente mover esta tarefa para as 'Tarefas Terminadas' ?");
    if (escolhaUsuario) {
        let cookieJwt = getCookie("jwt");
        //Invoca função de atualização, passando o uuid, o status e o tokenJWT
        atualizaTarefa(idTarefa, true, cookieJwt); // true -> A tarefa passa de "Pendente" para "Finalizada"
    }

}

//Card que simboliza nenhuma tarefa pendente cadastrada na API
function nenhumaTarefaPendenteEncontrada() {
    let liTarefaPendente = document.createElement('li');
    liTarefaPendente.classList.add("tarefa");

    liTarefaPendente.innerHTML =
        `
        <div class="descricao">
            <p class="nome">Você ainda não possui nenhuma tarefa cadastrada no sistema</p>
        </div
    `
    //Adiciona a lista principal
    tarefasPendentesUl.appendChild(liTarefaPendente);
}