const { gql } = require('apollo-server');
module.exports = gql`
type Order {
  _id: ID!
  body: String!
  createdAt: String!
  username: String
}
type User {
  _id: ID!
  username: String!
  password: String!
  email: String!
  token: String!
  createdAt: String!
  orders: [Order]
}
type Auth{
  token: ID!
  user: User!
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  orders(username: String): [Order]
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
}
`

