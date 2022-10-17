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
        genres: [Genre]
        rating: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        # query game id 
        # query user
        # query genre
    }

    input GameInput {
        gameId: ID!
        image: String
        title: String!
        price: Float!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addToCart(GameInput): User
        removeFromCart(gameId: ID!): User
    }
`