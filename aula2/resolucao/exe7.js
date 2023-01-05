function parseData(){
    let data = document.getElementById("Data").value;

    //Pesquisem sobre expressao regular
    data = data.split(/[.,/-\s]/g);

    document.write("Dia: " + data[0] + "<br>");
    document.write("Mes: " + data[1] + "<br>");
    document.write("Ano: " + data[2] + "<br>");
}