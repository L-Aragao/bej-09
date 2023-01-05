function calculaMedia(){
    let totalNotas = 0;
    let notas = document.getElementById("Notas").value;
    
    notas = notas.split(" "); //array com todas as notas

    for(indice in notas){
        totalNotas += parseInt(notas[indice])
        document.write(`Nota ${parseInt(indice)+ 1} é ${notas[indice]}<br>`)
    };
    let notaMedia = totalNotas / notas.length;
    document.write(`A media das notas é: ${notaMedia}<br>`);
}