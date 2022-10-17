// const variables: Auth, User Models, Apollo
const { AuthenticationError } = require('apollo-server-express');
const { Cart, Game, Genre, User } = require('../models');
const { signToken } = require('../utils/auth');

// resolver const 
const resolvers = {

    // -- Query find with gameid, user , genre ,  
    Query: {
        gameId: async () => {
            return await Game.gameId.find();
        },
        user: async (parent, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'User.cart',
                    populate: 'game'
                });
                user.game.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user
            };
        },
        // genre: async (parent) => {
        //     if (context.user) {
        //         const user = await User.findById(context.user_id).populate({
        //             path: 'game.genres',
        //             populate: 'genres'
        //         })
        //     }
        // }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addtoCart: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
                const cart = new Cart({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { GameInput: gameId } });

                return cart;
            }

            throw new AuthenticationError('Not logged in');
        },
        removeFromCart: async (parents, {game}, context) => {
            console.log(context);
            if (context.user) {
                const cart = Cart({ game });

                await User.findByIdAndDelete(context.user._id, { $pull: { Cart:gameId } });

                return cart;
            }

            throw new AuthenticationError('Not logged in');
        },



        // Send game element to checkout and populate checkout
    }
};
// export module
module.exports = resolvers;