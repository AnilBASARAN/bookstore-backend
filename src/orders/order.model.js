/* const newOrder = {
    name:data.name,
    email:data.email,
    adress: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode
    }, */

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    adress: {
        city:{
            type:String,
        required: true,
        },
        country:String,
        state:String,
        zipcode:String,
    },
    phone:{
        type:String,
        required: true,
    },
    productIds: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required:true,
    }],
    totalPrice: {
        type:Number,
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
},
    {timestamps:true}

);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;