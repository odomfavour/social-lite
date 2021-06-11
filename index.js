// one

const {ApolloServer, PubSub } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require ('mongoose')

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')
const { MONGODB } = require('./config')

const pubsub = new PubSub();


// we need resolvers


//set up server

const server  = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({ req, pubsub })
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongo connected')
        return server.listen({ port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    }).catch((err) => 
     {
        console.log(err)
    })