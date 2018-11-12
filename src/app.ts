import "reflect-metadata";
import * as Koa from "koa";
import init from "./init";

const app: Koa = new Koa();

init(app);

export default app;