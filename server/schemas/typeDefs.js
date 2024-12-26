const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type DJ {
    _id: ID
    firstName: String!
    lastName: String!
    fullName: String
    nickName: String
    Title: String
    Shows: [Show]
    image: String
    url: String
    bio: [String]
  }
  type BoardMember {
    _id: ID
    firstName: String!
    lastName: String!
    fullName: String
    nickName: String
    Title: String
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
    hosturl: [Hosturl]
  }
  type WeeklySchedule {
    _id: ID
    day: String
    startTime24: Float
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
    boardMembers: [BoardMember]
  }
  type Hosturl {
    _id: ID
    url: String
  }
`;

module.exports = typeDefs;
