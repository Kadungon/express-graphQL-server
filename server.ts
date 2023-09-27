import express from "express";
import morgan from "morgan";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { loadFilesSync } from "@graphql-tools/load-files";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const typeArray = loadFilesSync(path.join(__dirname, "*/*.graphql"));
export const resolversArray = loadFilesSync(
  path.join(__dirname, "*/*.resolvers.ts")
);

const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers: resolversArray,
});

async function startApollowServer() {
  const app = express();

  const server = new ApolloServer({
    schema,
  });
  await server.start();

  app.use(morgan("tiny"));
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("App Listning at PORT:4000");
  });
}

startApollowServer();
