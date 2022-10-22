import { gql } from "@apollo/client";

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
export const DELETE_GAME = gql`
  mutation removeGame($gameId: ID!) {
    removeGame(gameId: $gameId) {
      _id
      username
      email
      gameId {
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($body: SavedGameInput) {
    saveGame(body: $body) {
      _id
      username
      email
      savedGame{
        authors
        gameId
        image
        title
        description
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
        gameCount
         savedGame{
             authors
             gameId
             image
             title
             description
         }
     }
    }
}
`;
