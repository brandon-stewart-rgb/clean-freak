const { gql } = require('apollo-server');
module.exports = gql`
type Order {
  id: ID!
  body: String!
  createdAt: String!
  username: String
}
type User {
  id: ID!
  email: String!
  token: String!
  createdAt: String!
  orders: [Order]
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

