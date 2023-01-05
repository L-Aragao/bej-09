//exercicio Validador da Bomba do Posto

const prompt = require("prompt");

let leitura1 = 0;
let leitura2 = 0;

function primeiraLeitura(callback) {
    console.log("Primeira leitura comecando");
    prompt.start();
    //
    // Get two properties from the sensor: leitura1
    //
    prompt.get(['leitura'], function (err, result) {
        //
        // Log the results.
        //
        console.log('A primeira Leitura foi: ' + result.leitura);
        leitura1 = parseInt(result.leitura);
        callback();
    });
}

function segungaLeitura(callback) {
    console.log("Segunda leitura comecando");
    prompt.start();

    //
    // Get two properties from the sensor: leitura2
    //
    prompt.get(['leitura'], function (err, result) {
        //
        // Log the results.
        //
        console.log('A Segunda Leitura foi: ' + result.leitura);
        leitura2 = parseInt(result.leitura);
        callback();
    });
}

const validaLeitura = function () {
    console.log("Comecando a validacao da temperatura");
    if (leitura1 > leitura2) {
        console.error("Sucesso: leitura correta");
    } else if (leitura1 < leitura2) {
        console.log("Error: error no sensor");
    } else {
        console.log("Fraude na bomba");
    }

}

// primeiraLeitura(segungaLeitura)
// primeiraLeitura(function(){ segungaLeitura() })
// primeiraLeitura(( )=> segungaLeitura)

primeiraLeitura(() => {
    segungaLeitura(
        () => validaLeitura()
    )
}
)

// primeiraLeitura(function(){
//     segungaLeitura( function (){
//         validaLeitura()
//     })
// })

// primeiraLeitura(() => {
//     setTimeout(() => {
//         segungaLeitura(
//             () =>
//                 setTimeout(() =>
//                     validaLeitura(), 5000)
//         )
//     }, 5000)
// }
// )


