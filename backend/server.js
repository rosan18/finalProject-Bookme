/**const express = require('express');
const app = express();

const cors = require('cors');

const jwt = require('jsonwebtoken')
const JWT_SECRET = 'kmkkslk27628()jjgoalkdj'

const Users = require('./models/SignUp')
const User = require('./models/Login')
const bcrypt = require("bcrypt");

const connection = require('./connection.js');
const SignUpRoute =require('./routes/api/signUp');
const bookingsRoute = require('./routes/api/bookings');
const loginRoute = require('./routes/api/login');
app.use(express.json());
app.use(cors());

//handle routes and test on post man

app.use('/api/bookings',bookingsRoute )
app.use('/api/signUp', SignUpRoute) 
app.use('/api/login', loginRoute)

app.get('/users', (req, res) => {
  res.send('Hello World!')
  
})
app.post("/api/signUp", async (req, res) => {

 try {
    // hashing the password
    //create a salt
  const salt = await bcrypt.genSalt()

  const hashedPassword = await bcrypt.hash(request.body.password, salt)
  console.log(salt)
  console.log(hashedPassword)
      
  // create a new user instance and collect the data
      const users = {
        fname: request.body.fname,
        lname:request.body.lname,
        email: request.body.email,
        password:hashedPassword,
      };
      response.send(users)

    }catch (error) {
        console.log(error)
         response.status(500).json({message:"failed to create user"})
    
       }
      
 })
app.post('/api/login', async (req,res) =>{
  const { email, password } = req.body;
  const user = User.findOne( {email});
  if(!user) {
    return res.json({error: 'user not found'})
  }
  try{
   if(await bcrypt.compare(password, user.password)) {
    res.send('success')
   } else {
     res.send('not allowed')
   }
   
    }  catch{
        res.status(500).send()
  }

 //const token = jwt.sign({}, JWT_SECRET);
})

        // catch error if the new user wasn't added successfully to the database
       




        app.listen(5000, () => {
  
          console.log('Server is running successfully on port 5000');
      
      })**/
        
      const express = require('express');
      const app = express();
      const cors = require('cors');
      const jwt = require('jsonwebtoken');
      const bcrypt = require('bcrypt');
      const connection = require('./connection.js');
      const SignUpRoute = require('./routes/api/signUp');
      const bookingsRoute = require('./routes/api/bookings');
      const loginRoute = require('./routes/api/login');
      
      const Users = require('./models/SignUp');
      const User = require('./models/Login');
      
      const JWT_SECRET = 'kmkkslk27628()jjgoalkdj';
      
      app.use(express.json());
      app.use(cors());
      
      app.use('/api/bookings', bookingsRoute);
      app.use('/api/signUp', SignUpRoute);
      app.use('/api/login', loginRoute);
      
      app.get('/users', (req, res) => {
        res.send('Hello World!');
      });
      
      app.post('/api/signUp', async (req, res) => {
        try {
          // Hashing the password
          // Create a salt
          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
          // Create a new user instance and collect the data
          const users = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
          };
          res.send(users);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Failed to create user' });
        }
      });
      
      app.post('/api/login', async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
      
        if (!user) {
          return res.json({ error: 'User not found' });
        }
      
        try {
          if (await bcrypt.compare(password, user.password)) {
            res.send('Success');
          } else {
            res.send('Not allowed');
          }
        } catch {
          res.status(500).send();
        }
      });
      
      app.listen(5000
        , () => {
        console.log('Server is running successfully on port 5000');
      });
      
