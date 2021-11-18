const { gql } = require('apollo-server');
module.exports = gql`

type Order {
  _id: ID!
  name: String! 
  createdAt: String!
  username: String!
  price: Number!
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

}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addOrder(name: String!, createdAt: String!, username: String!, price: Number!): Auth
}
`
