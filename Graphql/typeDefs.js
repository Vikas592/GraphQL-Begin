const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    hobbies: [String!]!
  }
# Queries
  type Query {
    getAllUsers: [User!]!
  }
# Mutations
  type Mutation {
    createUser(name:String!, age:Int!, hobbies: [String!]!): User!
  }
`;

module.exports = { typeDefs };
