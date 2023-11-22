import { gql } from '@apollo/client';

export const GET_OSS_INFO = gql`
  query getOssInfo {
    getOssInfo {
      expire
      signature
      accessId
      policy
      host
    }
  }
`;
