function fabricaPessoa(sexo, altura) {
    return { sexo, altura };
}

function retornaDados() {
    let alturas = (document.getElementById("Altura").value).split(" ");
    let sexos = (document.getElementById("Sexo").value).split(" ");
    let listaPessoas = [];

    if (alturas.length != sexos.length) {
        document.write("ERROR: Quantidade Altura X Sexo não casam")
    }
    // TRAZER regras Constrains para o exericio, por exemplo validar os inputs de sexo apenas com M e F
    // else if(sexos){
    // }
    else {
        let contagemM = 0;
        let contagemF = 0;
        let contagemErro = 0;
        let indiceMaiorPessoa = 0;

        for (i = 0; i < alturas.length; i++) {
            //popula o array
            listaPessoas.push(fabricaPessoa(sexos[i], alturas[i]));

            //Faz contagem do sexo
            if (sexos[i].toUpperCase() == "M") { contagemM++; }
            else if (sexos[i].toUpperCase() == "F") { contagemF++; }
            else { contagemErro++; }

            //acha o indice com a maior altura
            if (parseFloat(alturas[i]) > parseFloat(alturas[indiceMaiorPessoa])) { indiceMaiorPessoa = i; }
        }

        document.write(`O Valores de M ${contagemM}<br>`);
        document.write(`O Valores de F ${contagemF}<br>`);
        document.write(`O Valores de Erro ${contagemErro}<br>`);
        document.write(`A Maior pessoa é do sexo: ${listaPessoas[indiceMaiorPessoa].sexo} e sua Altura é: ${listaPessoas[indiceMaiorPessoa].altura}`);

    }
}