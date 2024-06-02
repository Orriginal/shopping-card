import { buildSchema } from 'graphql';

const schema = buildSchema(`
   type Item {
    id: ID!
    title: String!
    price: Int!
    pictureUri: String
    stockAmount: Int!
  }

  type Query {
        getItems: [Item]
        getItem(id: ID!): Item
    }

  type Mutation {
        createItem(title: String!, price: Int!, pictureUri: String, stockAmount: Int!): Item!
        updateItem(id: ID!, title: String, price: Int, pictureUri: String, stockAmount: Int): Item!
        deleteItem(id: ID!): ID!
    }
`);

export default schema;
