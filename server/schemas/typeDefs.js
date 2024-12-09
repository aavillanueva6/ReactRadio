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
    host: [DJ]
    shortDescription: String
    longDescription: [String]
    url: String
    image: String
    schedule: [WeeklySchedule]
    source: String
  }
  type WeeklySchedule {
    _id: ID
    day: String
    startTime24: Int
    startTime12: String
    endTime12: String
    show: Show
    host: [DJ]
  }
  type Query {
    djs: [DJ]
    shows: [Show]
    singleDJ(url: String!): DJ
    singleShow(url: String!): Show
    schedule(day: String!): [WeeklySchedule]
  }
`;

module.exports = typeDefs;
