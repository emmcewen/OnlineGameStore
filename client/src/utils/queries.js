import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
       User(username:$username){
        _id
        username
        email
       }
    }
`;
export const QUERY_GAME = gql`
    query game($_id:String!){
        game(_id: $_id){
            gameId
            image
            title
            price
            summary
            description
            genres
            rating
        }
    }
    `;
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
