const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type DJ {
    _id: ID
    firstName: String!
    lastName: String!
    nickName: String
    Title: String
    Shows: [Show]
    image: String
  }
  type Show {
    _id: ID
    name: String!
    host: DJ
    shortDescription: String
    longDescription: [String]
  }
  type Query {
    djs: [DJ]
    shows: [Show]
  }
`;

module.exports = typeDefs;
