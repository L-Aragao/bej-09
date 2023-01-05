const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')

const schemaTeste = buildSchema(
    `type Query {
        hello: String
        helloWithParamams(nome: String): String
    }`
);

const resolver = {
    hello: () => "Hello somebody",
    helloWithParamams: ({nome}) => `Hello ${nome}` 
}

const app = express()

app.use('/graphql', graphqlHTTP(
    {
        schema: schemaTeste,
        rootValue: resolver,
        graphiql: true
    }
))

app.listen(3030, ()=> console.log('servico online'))
