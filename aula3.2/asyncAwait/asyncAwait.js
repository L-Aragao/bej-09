const prompt = require("prompt")

//exercicio calculo do dobro

const calculaDobro = (x) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(x*2), 1000));
}

prompt.start();

const leitura = () => new Promise((resolve, reject) => {
    prompt.get(['numero'], function (err, result) {
        // console.log('Numero inserido foi o: ' + result.numero);
        resolve(parseInt(result.numero));
    })
});

const executionCycle = async () => {
    let numeroReferencia = await leitura();
    let resultado1 = await calculaDobro(numeroReferencia);
    let resultado2 = await calculaDobro(resultado1);
    let resultado3 = await calculaDobro(resultado2);
    console.log(resultado3);
}

executionCycle()