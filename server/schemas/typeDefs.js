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
    url: String
    bio: [String]
  }
  type Show {
    _id: ID
    name: String!
    host: DJ
    shortDescription: String
    longDescription: [String]
    url: String
    image: String
  }
  type Query {
    djs: [DJ]
    shows: [Show]
    singleDJ(url: String!): DJ
    singleShow(url: String!): Show
  }
`;

module.exports = typeDefs;
