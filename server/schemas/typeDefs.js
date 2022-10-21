const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        cart: [Game]
        cart_total: Int
    }

    type Game {
        gameId: ID!
        image: String
        title: String!
        price: Float!
        summary: String
        description: String
        genres: [String]
        rating: String
    }

    type Cart {
        gameId: ID!
        image: String
        title: String!
        price: Float!
    }

    type Auth {
        token: ID!
        user: User
    }

    input genreName {
        genre: String!
    }

    type Query {
        # query game id 
        # query user
        # query genre
        user: User
        game(gameId: ID!): Game
        genre(genreName: genreName): [Game]
    }

    input GameInput {
        gameId: String!
        image: String
        title: String!
        price: Float!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addToCart(body: GameInput): User
        removeFromCart(gameId: ID!): User
    }
`

module.exports = typeDefs;