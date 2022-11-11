const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname:{
      type: String,
      
    },
    lname:{
        type: String,
    
       
    },email:{
        type:String,
        unique: true
    },

     password:{
        type:String,
        
    }
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users;