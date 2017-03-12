import express from 'express'
import graphQLHTTP from 'express-graphql'
import { schema } from '../data/schema'
import logger from 'morgan'
import bodyParser from 'body-parser'

const GRAPHQL_PORT = 4000;

const app = express()
app.use(logger('tiny'))
app.use('/', graphQLHTTP({
  schema, 
  graphiql: true
}))
app.listen(GRAPHQL_PORT, () => console.log(`Now browse to localhost:${GRAPHQL_PORT}`))
