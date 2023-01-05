const url = require("url");

// url => host              + path + parametros ou query
//        www.algumsite.com/path/parametros

let address = "http://localhost:8080/perfil123/fotos/?year=2017&month=february";

let urlparsed = url.parse(address, true);

console.log(urlparsed.host);
console.log(urlparsed.pathname);
console.log(urlparsed.search);

let urldata = urlparsed.query;
console.log(urldata);
console.log(urldata.year);
console.log(urldata.month);