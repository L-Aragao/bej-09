function classificaIdade(){
    let idades = document.getElementById("Idades").value;    
    idades = idades.split(" "); //array com todas as idades

    let maior = 0;
    let menor = 0;

    // for(i = 0; i < idades.length; i++){
    //     let idade = parseInt(idades[i]);
    //     if(idade < 18){
    //         menor++;
    //     }else{
    //         maior++
    //     }
    // }

    // for(i in idades){
    //     console.log(i)
    //     let idade = parseInt(idades[i])

    //     if(idade < 18){
    //         menor++;
    //     }else{
    //         maior++
    //     }
    // }

    for(age of idades){
        console.log(age)

        if(parseInt(age) < 18){
            menor++;
        }else{
            maior++
        }
    }

    document.write(`Quantidade na maioridade legal: ${maior}<br>`)
    document.write(`Quantidade menor que 18: ${menor}<br>`)
}
