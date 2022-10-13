//models/booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name:{
      type: String,
      required:true
    },
    service:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        timestamps: true
    },

     cost:{
        type:Number,
        required:true
    }
})

const Bookings = mongoose.model('Bookings', BookingSchema)
module.exports = Bookings;