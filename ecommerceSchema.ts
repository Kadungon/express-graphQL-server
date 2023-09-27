import { buildSchema } from "graphql";

const ecommerceSchema = buildSchema(`
type Query {
    products: [Product]
    orders: [Order]
}

type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
}

type Review{
    rating: Int!
    comment: String
}

type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
}

type OrderItem {
    product: Product!
    quantity: Int!
}
`);

const ecommerceData = {
  products: [
    {
      id: "1",
      description: "GSHOCK 65",
      price: 12000,
    },
    {
      id: "2",
      description: "PS5",
      price: 49000,
    },
    {
      id: "3",
      description: "RUST Developer Guide",
      price: 2000,
    },
  ],
  orders: [
    {
      date: "2023-05-01",
      subtotal: 4000,
      items: [
        {
          product: {
            id: 1,
            description: "RUST Developer Guide",
            price: 2000,
          },
          subtotal: "",
          quantity: 2,
        },
      ],
    },
  ],
};

export { ecommerceData, ecommerceSchema };
