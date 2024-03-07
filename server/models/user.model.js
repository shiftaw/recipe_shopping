const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    }
}, {timestamps: true})



module.exports = mongoose.models("user.model", userSchema)