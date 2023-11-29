import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation studentRegister($account: String!, $password: String!) {
    studentRegister(account: $account, password: $password) {
      code
      message
    }
  }
`;

export const LOGIN = gql`
  mutation studentLogin($account: String!, $password: String!) {
    studentLogin(account: $account, password: $password) {
      code
      message
    }
  }
`;
