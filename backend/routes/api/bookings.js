//routes/bookings.js

const express = require('express');
const router = express.Router();

//load bookings model
const Bookings = require('../../models/Bookings');

// @route GET api/bookings/test
// @description tests bookings route

router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/bookings
// @description Get all bookings
// @access Public
router.get('/', async (req, res) => {
    try {
       const bookings = await Bookings.find({});
       console.log(bookings)
       
        res.json(bookings)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"no appointments found"})
        
    }
});



//@route GET by /:id
router.get('/:id', async (req, res) => {
    try {
      const bookings= await Bookings.findById(req.params.id);
      console.log(bookings)
      res.send(bookings)
    } catch (error) {
      console.error(error);
        res.status(500).json({message:"server failed"})
    }
    });
    
    //@route POST 
    router.post('/', async (req, res) => {
       try {
        console.log(req.body)
        const bookings = await Bookings.create(req.body);
         res.send(bookings)
        
       } catch (error) {
        console.log(error)
         res.status(500).json({message:"failed to create appointment"})
    
       } 
    })
    
    //@route PUT
    router.put('/:id', async (req,res) => {
      try {
        const bookings = await Bookings.findByIdAndUpdate(req.params.id, req.body);
         console.log(bookings)
         res.send(bookings)
      } catch (error) {
        res.status(500).json({message:"unable to update"})
      }
    })
    
    //@route delete
    router.delete('/:id', async(req, res)=>{
      try {
        const bookings= await Bookings.findByIdAndRemove(req.params.id, req.body)
        console.log(bookings)
      } catch (error) {
        res.status(500).json({message:"no appointments"})
        
      }
    })
    
    
      module.exports = router;
    