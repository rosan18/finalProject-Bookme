const express = require('express');
const router = express.Router();

//load login model
 const User = require('../../models/Login')

 
// @route GET api/users
// @description Get all users
// @access Public
router.get('/', async (req, res) => {
    try {
       const user = await User.find({});
       //console.log(users)
       console.log(error)
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"no user found"})
        
    }
});


    
    //@route POST 
   router.post('/', async (req, res) => {
      const {  email, password} = req.body

       try {
        
        //console.log(req.body)
        const user = await User.create(
          req.body );
         res.send(user)
        
       } catch (error) {
        console.log(error)
         res.status(500).json({message:"failed to create user"})
    
       } 
    })
    module.exports = router;
    