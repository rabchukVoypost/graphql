const {ApolloServer} = require("apollo-server-express")
const express = require("express")
const dbConnected = require('./db/mongoose')
const app = express()
const typeDefs = require("./models/typeDefs")
const resolvers = require("./models/resolvers")


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({app})

dbConnected()

const port = process.env.PORT || 8080

app.listen(port,(err:any)=>{
    if (err) {
        throw Error(err)
    }
    console.log("Gql server is running at http:localhost:"+port+server.graphqlPath)
    }
)