const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const graphql = require('graphql')

global_var = "MARIO"

const queryResolver = new graphql.GraphQLObjectType({
    name: `Query`,
    fields: () =>({
        hello:{
            type: graphql.GraphQLString,
            resolve: () => "Hello somebody!"
        },
        getName:{
            type: graphql.GraphQLString,
            resolve: () => `Global Name is: ${global_var}`
        },
        helloWithParams: {
            type: graphql.GraphQLString,
            args: {
                nome: { type: graphql.GraphQLString },
                idade: { type: graphql.GraphQLInt}
            },
            resolve: async (parent, args, context, resolveInfo) =>{
                console.log(args)
                return `Hello ${args.nome}, sua idade é ${args.idade}`
            }
        }
    })
})

const mutationResolver = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        trocanome: {
            type: graphql.GraphQLString,
            args: {
                nome: { type: graphql.GraphQLString }
            },
            resolve:  async (parent, args, context, resolveInfo) =>{
                console.log(args)
                global_var = args.nome
                return `Hello the global name has been updated - ${global_var}`
            }
        }
    })
})

const schema = new graphql.GraphQLSchema({query: queryResolver, mutation: mutationResolver});

const app = express();
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(3030, ()=> console.log('servico online'))
