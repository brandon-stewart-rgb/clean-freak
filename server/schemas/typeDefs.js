const { gql } = require('apollo-server');
module.exports = gql`

type Order {
  _id: ID!
  name: String! 
  purchaseDate: String!
  price: Int!
}

type User {
  _id: ID!
  username: String!
  password: String!
  email: String!
  orders: [Order]
}

input OrderInput{
  _id: ID!
  name: String! 
  purchaseDate: String!
  price: Int!
}

type Auth{
  token: ID!
  user: User
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addOrder(orderData:OrderInput!): User
}
`
