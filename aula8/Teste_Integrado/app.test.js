const supertest = require('supertest');
const app = require('./app');

test('GET CalculadorSoma', async () => {
    const response = await supertest(app).get('/calculadora/soma/10/5')
    expect(response.statusCode).toEqual(200)
    expect(response.body.resultado).toEqual(15)
})