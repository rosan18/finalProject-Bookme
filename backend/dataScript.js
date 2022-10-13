//const mongoose = require('mongoose');


require('dotenv').config();
const connection = require('./connection.js');
//const modelBookings = require('./models/Bookings');
const data = require('./bookingData');
const Bookings = require('./models/Bookings');
//const data = new newModel({Data});
//data.save();


const importData = async  () => {
    
       //await Bookings.deleteMany({});
       try {
        await Bookings.insertMany(data);
       //Data.save();
       console.log(DataTransfer);
       } catch (error) {
        console.error("Error with data")
        console.log(error)
        process.exit(1);
       }
        

       
      
      
       
       
      }


importData();