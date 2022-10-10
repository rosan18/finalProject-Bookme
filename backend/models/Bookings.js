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

    price:{
        type:Number,
        required:true
    }
})