//models/booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name:{
      type: String,
      
    },
    service:{
        type: String,
       
    },
    date:{
        type:Date,
        timestamps: true
    },

     cost:{
        type: String
        
    }
})

const Bookings = mongoose.model('Bookings', BookingSchema)
module.exports = Bookings;