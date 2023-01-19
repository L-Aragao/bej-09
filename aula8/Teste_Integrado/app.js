const express = require('express');
const calculadora = require("./calculadora")
const app = express();

//Healcheck
app.get('/' , (req, res) => res.json({message: 'servico funcionando'}));

//CalculadorSoma
app.get('/calculadora/soma/:valor1/:valor2', (req, res) =>{
    const valor1 = parseInt(req.params.valor1)
    const valor2 = parseInt(req.params.valor2)
    console.log("valores: ", valor1, valor2)
    res.json({resultado: calculadora.soma(valor1, valor2)})
})

//So inicia o servidor/ serviço se o modulo que chama o main node o chamar tbm
if(require.main === module){
    app.listen(3000, () => console.log('serviço esta online'));
}

module.exports = app