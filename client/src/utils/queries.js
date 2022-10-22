import { gql } from "@apollo/client";
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      gameCount
      savedGame {
        authors
        gameId
        image
        title
        description
      }
    }
  }
`;
