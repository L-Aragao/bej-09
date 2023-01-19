

const calculadora = require("./calculadora")

test(`validar soma`, () => {
    let resultado = calculadora.soma(10, 5);
    expect(resultado).toEqual(15);

    resultado = calculadora.soma(10, -5);
    expect(resultado).toEqual(5);

    resultado = calculadora.soma('10', -5);
    expect(resultado).toEqual(null);
})

test(`validar subtração`, () => {
    let resultado = calculadora.sub(10, 5);
    expect(resultado).toEqual(5);

    resultado = calculadora.sub(10, -5);
    expect(resultado).toEqual(15);

    resultado = calculadora.sub('10', -5);
    expect(resultado).toEqual(null);
})