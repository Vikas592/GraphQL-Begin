const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    # name: String!
    # age: Int!
    # hobbies: [String!]!
    id: String
    first_name: String
    last_name: String
  }
  # Queries
  type Query {
    getAllUsers: [User!]!
  }
  # Mutations
  type Mutation {
    createUser(first_name: String!, last_name: String): User!
  }

  #subscription

  type Subscription {
    newUser: [User]!
  }
`

module.exports = { typeDefs };
