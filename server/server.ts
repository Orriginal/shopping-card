import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import { root } from './resolvers';
import cors from 'cors';

const server = express();

server.use(
    '/',
    cors({
        origin: `http://localhost:${process.env.PORT}`,
    }),
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: process.env.NODE_ENV === 'development',
    })
);

export default server;
