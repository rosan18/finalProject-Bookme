//routes/users.js.js

const express = require('express');
const router = express.Router();

//load users model
const Users = require('../../models/SignUp')

// @route GET api/users/test
// @description tests users route

router.get('/test', (req, res) => res.send('user route testing!'));

// @route GET api/users
// @description Get all users
// @access Public
router.get('/', async (req, res) => {
    try {
       const users = await Users.find({});
       //console.log(users)
       console.log(error)
        res.send(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"no user found"})
        
    }
});


    
    //@route POST 
   router.post('/', async (req, res) => {
      const { fname, lname, email, password} = req.body

       try {
        
        //console.log(req.body)
        const users = await Users.create(
          req.body );
         res.send(users)
        
       } catch (error) {
        console.log(error)
         res.status(500).json({message:"failed to create user"})
    
       } 
    })
    
    //@route PUT
    router.put('/:id', async (req,res) => {
      try {
        const users = await Users.findByIdAndUpdate(req.params.id, req.body);
         
         res.send(users)
      } catch (error) {
        res.status(500).json({message:"unable to update"})
      }
    })
    
    //@route delete
    router.delete('/:id', async(req, res)=>{
      try {
        const users= await Users.findByIdAndRemove(req.params.id, req.body)
        res.send(users)
      } catch (error) {
        res.status(500).json({message:"no user found"})
        
      }
    })
    
    
      module.exports = router;
    