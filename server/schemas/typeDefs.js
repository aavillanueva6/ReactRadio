const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type DJ {
    _id: ID
    firstName: String!
    lastName: String!
    nickName: String
    Title: String
    Shows: [Show]
  }
  type Show {
    _id: ID
    name: String!
    host: DJ
  }
  type Query {
    DJ: [DJ]!
  }
`;

module.exports = typeDefs;
