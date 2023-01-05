const axios = require('axios');


//a versão do axios 1.2.0 esta com problema com a descompressao, 
//para mitigar/ minimizar o problema mudei para a versao 1.1.x
//Thread com os erros:   https://github.com/axios/axios/issues/5296
const fatosDeGato = 'https://catfact.ninja/fact';
axios.get(fatosDeGato)
    .then(resultado => console.log(resultado.data))
    .catch(error => console.error(error))

// const google = 'http://google.com'

// axios.get(google)
//     .then(resultado => console.log(resultado.data))
//     .catch(error => console.error(error))

// const testeHttp = "http://localhost:8080/alunos"

// axios.get(testeHttp)
//     .then(resultado => console.log(resultado.data))
//     .catch(error => console.error(error))


// outra maneira de utilizar o axios
let options = {
    method: 'get',
    url: 'https://catfact.ninja/fact',
    responseType: 'json',
    charset: 'utf-8',
    responseEncodig: 'utf-8'
};

axios.request(options)
    .then(resultado => console.log(resultado.data))
    .catch(errr => console.error(errr))


//axios com post
// let data = "{ 'nome': 'luiz', 'idade': 20}"
// axios.post(url, data)

