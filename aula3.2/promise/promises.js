const prompt = require("prompt")

//exercicio calculo do dobro

const calculaDobro = (x) => {
    return x*2;
}

prompt.start();

const leitura = () => new Promise((resolve, reject) => {
    prompt.get(['numero'], function (err, result) {
        // console.log('Numero inserido foi o: ' + result.numero);
        resolve(parseInt(result.numero));
    })
});
    

let numeroReferencia = leitura();
// console.log(numeroReferencia); //promise pending


// numeroReferencia.then(
//     result => {
//         let resultado1 = calculaDobro(result);
//         return resultado1;
//     }
// ).then(
//     result => {
//         let resultado2 = calculaDobro(result);
//         return resultado2;
//     }
// ).then(
//     result => {
//         let resultado3 = calculaDobro(result);
//         console.log(resultado3)
//     }
// ).catch(
//    err => console.error(err) 
// )



// let resultado1 = calculaDobro(numeroReferencia);
// let resultado2 = calculaDobro(resultado1);
// let resultado3 = calculaDobro(resultado2);

// console.log(resultado3)