const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname:{
      type: String,
      
    },
    lname:{
        type: String,
    
       
    },email:{
        type:String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

     password:{
        type:String,
        required: [true, "Please provide a password!"],
        unique: false,
    }
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users;