const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Order {
    _id: ID
    name: String
    price: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
    token: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    order(_id: ID!): Order
  }


`;
  // type Mutation{
  //   register(registerInput: RegisterInput): User

  // }
module.exports = typeDefs;
