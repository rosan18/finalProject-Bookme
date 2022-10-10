const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams ={
    useUnifiedTopology:true,
};

const uri =`mongodb+srv://Rosan22:Anurose18@bookme-data.8fuqtrz.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose
.connect(uri, connectionParams)
.then(() => {
  console.log("Connected to database")
})
.catch((err) =>{
    console.log ("Error connecting to database", err)
})

module.exports = connection;