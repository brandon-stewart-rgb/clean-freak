const { gql } = require('apollo-server');
module.exports = gql`

type User {
  id: ID!
  username: String!
  email: String!
  orders: [Order]
}

type Order {
  id: ID!
  body: String!
  createdAt: String!
  username: String
}

type Auth{
  token: ID!
  user:User
}

type Query {
  me: User

}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
}
`
