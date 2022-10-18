const { Schema } = require('mongoose');

const cartSchema = new Schema({
    
    image: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = cartSchema;