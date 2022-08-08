function dividir(valor1Recebido, valor2Recebido) {
    let valor1 = parseFloat(valor1Recebido);
    let valor2 = parseFloat(valor2Recebido);

    if (valor1 == 0 || valor2 == 0) {
        return "Não se pode dividir por zero";
    } else {
        return valor1 / valor2;
    }
}

export default dividir;