const express = require('express');
const app = express();

const cors = require('cors');

const connection = require('./connection.js');


//const importData = require('./bookingData')
app.use(express.json());
app.use(cors());
//handle routes
app.use('/api', require('./routes/api/bookings'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(5000, () => {

    console.log('Server is running successfully on port 5000');
   });
  

