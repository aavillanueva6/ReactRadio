import { gql } from '@apollo/client';

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
    sqImage: String
    url: String
    bio: [String]
    shortBio: String
  }
  type BoardMember {
    _id: ID
    firstName: String!
    lastName: String!
    fullName: String
    nickName: String
    Title: String
    image: String
    sqImage: String
    url: String
    bio: [String]
    shortBio: String
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
    showurl: String
  }
  type Query {
    djs: [DJ]
    shows: [Show]
    singleDJ(url: String!): DJ
    singleShow(url: String!): Show
    schedule(day: String!): [WeeklySchedule]
    boardMembers: [BoardMember]
    singleBM(url: String!): BoardMember
  }
  type Hosturl {
    _id: ID
    url: String
  }
`;

export default typeDefs;
