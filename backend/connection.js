const mongoose = require('mongoose');
require('dotenv').config();
const connectionParams ={
    useUnifiedTopology:true,
};

const uri =
`mongodb+srv://mercyabolade20:Mercy123@mycluster.lhqis8t.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose
.connect(uri, connectionParams)
.then(() => {
  console.log("Connected to database")
})
.catch((err) =>{
    console.log ("Error connecting to database", err)
})

module.exports = connection;
