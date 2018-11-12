import { ApolloServer } from "apollo-server-koa";
import * as Logger from "koa-logger";
import * as TypeORM from "typeorm";
import * as TypeGraphQL from "type-graphql";

import resolvers from "./resolvers";
import entities from "./entities";

async function database() {
    return TypeORM.createConnection({
        type: "mysql",
        database: "type-graphql",
        username: "root",
        password: "qwerty123",
        port: 3306,
        host: "localhost",
        synchronize: true,
        logger: "advanced-console",
        logging: "all",
        dropSchema: true,
        cache: true,
        entities,
    });
}

export default async function(app) {
    app.use(Logger());

    // await database();
    const schema = await TypeGraphQL.buildSchema({
        resolvers,
    });

    const server = new ApolloServer({ schema });
    server.applyMiddleware({
        app,
    });
}