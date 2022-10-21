import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`;

export const ADD_TO_CART = gql`
mutation addToCart(body: GameInput) {
  addToCart(body:GameInput) {
 
    cart_total   
    cart {
        price
        gameId
        title
    }
  }
}
`;

export const REMOVE_FROM_CART = gql`
mutation removeFromCart($_gameId: ID!) {
  removeFromCart(gameID: $ID!) {
    token
    user {
        _id
        username
    }
  }
}
`;
