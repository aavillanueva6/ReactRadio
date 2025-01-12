import { gql } from '@apollo/client';

export const QUERY_DJs = gql`
  query getDJs {
    djs {
      firstName
      Shows {
        name
        url
      }
      lastName
      nickName
      Title
      _id
      image
      sqImage
      url
    }
  }
`;

export const QUERY_BOARD = gql`
  query getBoardMembers {
    boardMembers {
      firstName
      lastName
      fullName
      nickName
      Title
      _id
      image
      sqImage
      url
    }
  }
`;

export const QUERY_SINGLE_DJ = gql`
  query singleDJ($url: String!) {
    singleDJ(url: $url) {
      firstName
      lastName
      nickName
      Title
      image
      bio
      Shows {
        name
        url
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_BOARD_MEMBER = gql`
  query singleBM($url: String!) {
    singleBM(url: $url) {
      firstName
      lastName
      nickName
      Title
      image
      bio
    }
  }
`;

export const QUERY_SHOWS = gql`
  query shows {
    shows {
      _id
      shortDescription
      name
      url
      image
      host {
        nickName
        url
        fullName
      }
    }
  }
`;

export const QUERY_SINGLE_SHOW = gql`
  query singleShow($url: String!) {
    singleShow(url: $url) {
      name
      longDescription
      _id
      image
      host {
        nickName
        fullName
        url
      }
      schedule {
        day
        startTime12
        endTime12
      }
    }
  }
`;

export const QUERY_SINGLE_DAY = gql`
  query singleDay($day: String!) {
    schedule(day: $day) {
      day
      show {
        name
        url
        shortDescription
        host {
          nickName
          url
        }
      }
      startTime24
      startTime12
      endTime12
    }
  }
`;

export const QUERY_SHOW_NAMES_URLS = gql`
  query shows {
    shows {
      _id
      name
      url
    }
  }
`;
