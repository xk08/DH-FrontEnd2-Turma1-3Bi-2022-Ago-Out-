/* AULA 3 - REVISÃO 1 */

// Laços de repetição e iteração

// FOR..IN (objeto)
function aulaIteracoes() {
    let usuario = {
        nome: "",
        idade: 0,
        endereco: {
            cidade: "São Borja",
            uf: "RS"
        }
    }
    //Atribuindo dados ao objeto usuário
    usuario.nome = "Everton";
    usuario.idade = 30

    for (let objeto in usuario) {
        console.log(usuario[objeto]);
    }

    //FOR..OF (arrays)

    let frutas = ["Maça", "Pera", "Limão"];
    frutas.push("Morango");

    console.log(frutas[2]);

    //estrutura classica
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }

    for (let item of frutas) {
        console.log(item);
    }

    //forEach
    function exibeFruta(frutaRecebida) {
        console.log(frutaRecebida);
    }

    frutas.forEach(fruta => {
        console.log(fruta);
        //ação 1
        //ação 2
        //ação 3
    });

    //MAP
    let novoArray = frutas.map(fruta => {
        return fruta.toLocaleUpperCase();
    });

    console.log(novoArray);

}

let usuario = "Marcos";
export { usuario, aulaIteracoes }; //Exportando as informações para serem usadas em outros locais do projeto