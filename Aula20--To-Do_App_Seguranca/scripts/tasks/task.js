//Executa automaticamente ao chamar a página tarefas.html
onload = function () {

    //Busca o token no Storage
    let token = sessionStorage.getItem("jwt");

    if (!token) {
        //Caso o token seja inválido....
        window.location = "index.html"
    } else {
        //Caso o token seja válido...
        //Executa as outras ações...
    }
}