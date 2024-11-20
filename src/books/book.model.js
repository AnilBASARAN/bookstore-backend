const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: true,
    },
    category: {
        type:String,
        required: true,
    },
    trending: {
        type:Boolean,
        required: true,
    },
    coverImage: {
        type:String,
        required: true,
    },
    createdAt: {
        type:Date,
        default: Date.now,
    },
    oldPrice: Number,
    newPrice: Number,
},
    {timestamps:true}

);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;