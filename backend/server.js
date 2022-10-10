const express = require('express');
const app = express();
app.use(express.json());
const connection = require('./connection.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {

    console.log('Server is running successfully on port 5000');
   });
  

