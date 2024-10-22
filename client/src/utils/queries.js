import { gql } from '@apollo/client';

export const QUERY_DJs = gql`
  query getDJs {
    djs {
      firstName
      Shows {
        name
      }
      lastName
      nickName
      Title
      _id
      image
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
