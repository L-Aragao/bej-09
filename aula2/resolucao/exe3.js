function localizaMaior(){

    let notas = document.getElementById("Notas").value;    
    notas = notas.split(" "); //array com todas as notas
    let maiorNota = 0;
    for(i in notas){
        let nota = parseFloat(notas[i]);
        if(maiorNota < nota){
            maiorNota = nota;
        }
    }
    document.write(`A maior nota é: ${maiorNota}<br>`)

    //Outra maneira de fazer o exercicio
    // const valoresAgoraNumericos = notas.map(str => {
    //     return Number(str);
    // });
    // let maiorValor = Math.max(...valoresAgoraNumericos);
    // document.write(`Outro calculo da maior deu: ${maiorValor}<br>`);

}