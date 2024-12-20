const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;


const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },
    password: {
        type:String,
        required: true,
    },
    role: {
        type:String,
        enum: ["user","admin"],
        require: true
    },
    createdAt:{
        type:Date,
        default: Date.now,
    }
},
    {timestamps:true}

);
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,saltRounds);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;