let tarefasTerminadasUl = document.querySelector(".tarefas-terminadas");

function renderizaTarefasConcluidas(tarefaRecebida) {
    let liTarefaTerminada = document.createElement('li');
    liTarefaTerminada.classList.add("tarefa");
    //liTarefaPendente.setAttribute('class', 'tarefa'); //Também é possível

    liTarefaTerminada.innerHTML =
        `
        <div class="done"></div>
        <div class="descricao">
            <p class="nome">${tarefaRecebida.description}</p>
            <div>
                <button><i id="${tarefaRecebida.id}" class="fas fa-undo-alt change"></i></button>
                <button><i id="${tarefaRecebida.id}" class="far fa-trash-alt"></i></button>
            </div>
        </div>
    `
    //Adiciona a lista principal
    tarefasTerminadasUl.appendChild(liTarefaTerminada);
}

//Captura toda a lista e verifica qual foi o elemento clicado (com o target)
tarefasTerminadasUl.addEventListener('click', function (tarefaClicada) {
    tarefaClicada.preventDefault(); //Impede de atualizar a pagina
    let targetTarefa = tarefaClicada.target;
    let cookieJwt = getCookie("jwt");

    //Trocar o status da atividade para "pendente"
    if (targetTarefa.className == "fas fa-undo-alt change") {
        let escolhaUsuario = confirm("Deseja realmente voltar esta tarefa para as 'Tarefas Pendentes' ?");
        if (escolhaUsuario) {
            atualizaTarefa(tarefaClicada.target.id, false, cookieJwt); // true -> A tarefa passa de "Pendente" para "Finalizada"
        }
    }

    //Deletar uma tarefa por seu uuid
    if (targetTarefa.className == "far fa-trash-alt") {

        let escolhaUsuario = confirm("Deseja realmente deletar esta tarefa ?");
        if (escolhaUsuario) {
            deletarTarefa(tarefaClicada.target.id, cookieJwt);
        }
    }
});