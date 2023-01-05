function calculaQuadrado(){

    let notas = document.getElementById("Notas").value;
    
    notas = notas.split(" "); //array com todas as notas

    for(indice in notas){
        // let notaAoQuadrado = parseFloat(notas[indice]) ** 2
        let notaAoQuadrado = Math.pow( parseFloat(notas[indice]), 2);
        document.write(`Nota ${parseInt(indice)+ 1} é ${notaAoQuadrado}<br>`)
    };
}