import express from "express";
import morgan from "morgan";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import { loadFilesSync } from "@graphql-tools/load-files";
import { Products } from "./products/products.model";
import { Orders } from "./orders/orders.model";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const typeArray = loadFilesSync(path.join(__dirname, "*/*.graphql"));
export const resolversArray = loadFilesSync(
  path.join(__dirname, "*/*.resolvers.ts")
);

const schema = makeExecutableSchema({
  typeDefs: typeArray,
  resolvers: resolversArray,
});

const ecommerceData = {
  products: Products,
  orders: Orders,
};
const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.use(
  "/graphql",
  createHandler({ schema: schema, rootValue: ecommerceData })
);

app.listen(4000, () => {
  console.log("App Listning at PORT:4000");
});
