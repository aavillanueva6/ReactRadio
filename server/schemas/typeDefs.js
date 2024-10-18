const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type DJ {
    _id: ID
    firstName: String!
    lastName: String!
    Title: String
    Shows: [String]
  }
  type Query {
    DJs: [DJ]!
  }
`;

module.exports = typeDefs;
