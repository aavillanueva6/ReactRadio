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
    }
  }
`;
