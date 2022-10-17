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
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'User.cart',
                    populate: 'game'
                });
                user.game.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user
            };
        },
        genre: async (parent) => {
            if (context.user) {
                const user = await User.findById(context.user_id).populate({
                    path: 'game.genres',
                    populate: 'genres'
                })
            }
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
                const cart = new Cart({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return cart;
            }

            throw new AuthenticationError('Not logged in');
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        // Update cart with new product values
        // updateProduct: async (parent, { _id, quantity }) => {
        //     const decrement = Math.abs(quantity) * -1;

        //     return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        // },
        // throw Auth error if user is not logged in
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
        }



        // Send game element to checkout and populate checkout
    }
};
// export module
module.exports = resolvers;