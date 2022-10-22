import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
     token
     user{
         _id
         username
         email
         cart{
             image
             title
             price
         }
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

export const DELETE_GAME = gql`
  mutation removeGame($gameId: ID!) {
    removeGame(gameId: $gameId) {
      _id
      username
      email
      gameId {
        ID
      }
    }
  }
`;