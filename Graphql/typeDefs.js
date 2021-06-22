const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    name: String!
    age: Int!
    hobbies: [String!]!
  }

  type Query {
    getAllUsers: [User!]!
  }
`;

module.exports = { typeDefs };
