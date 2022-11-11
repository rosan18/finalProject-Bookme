const express = require('express');
const app = express();

const cors = require('cors');

const connection = require('./connection.js');
const userRoute =require('./routes/api/users');
const bookingsRoute = require('./routes/api/bookings')
app.use(express.json());
app.use(cors());

//handle routes and test on post man

app.use('/api/bookings',bookingsRoute )
app.use('/api/users', userRoute) 

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})


app.listen(5000, () => {
  
    console.log('Server is running successfully on port 5000');

})
  

