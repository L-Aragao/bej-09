function inverterNomes(){
    let nomes = document.getElementById("Nomes").value;
    nomes = nomes.split(" ");

    for(i = nomes.length - 1; i > -1; i--){
        document.write(nomes[i] + "<br>")
    }
}