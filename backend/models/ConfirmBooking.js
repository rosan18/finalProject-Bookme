const mongoose = require('mongoose');

const ConfirmBookingSchema = new mongoose.Schema({
    name:{
        type: String,
        
      },
      service:{
          type: String,
         
      },
      dateOfAppointment:{
          type:Date,
          timestamps: true
      },
})

const ConfirmBookings= mongoose.model('ConfirmBookings', ConfirmBookingSchema)
module.exports = ConfirmBookings;