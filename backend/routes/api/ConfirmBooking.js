//routes/ConfirmBooking.js

const express = require('express');
const router = express.Router();

//load ConfirmBookingModel
const ConfirmBookings = require('../../models/ConfirmBooking')


// @route GET api/ConfirmBookings/test
// @description tests ConfirmBookings route

router.get('/test', (req, res) => res.send('confirmBookings route testing!'));

// @route GET api/ConfirmBookings
// @description Get all ConfirmBookings
// @access Public
router.get('/', async (req, res) => {
    try {
       const confirmation = await ConfirmBookings.find({});
        res.json(confirmation)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"no appointments found"})
        
    }
});



//@route GET by /:id
router.get('/:id', async (req, res) => {
    try {
      const confirmation= await ConfirmBookings.findById(req.params.id);
       res.send(confirmation)
    } catch (error) {
      console.error(error);
        res.status(500).json({message:"server failed"})
    }
    });
    
    //@route POST 
    router.post('/', async (req, res) => {
       try {
        console.log(req.body)
        const confirmation = await ConfirmBookings.create(req.body);
         res.send(confirmation)
        
       } catch (error) {
        console.log(error)
         res.status(500).json({message:"failed to create appointment"})
    
       } 
    })
    
    //@route PUT
    router.put('/:id', async (req,res) => {
      try {
        const confirmation= await ConfirmBookings.findByIdAndUpdate(req.params.id, req.body);
         //console.log(confirmation)//
         res.send(confirmation)
      } catch (error) {
        res.status(500).json({message:"unable to update"})
      }
    })
    
    //@route delete
    router.delete('/:id', async(req, res)=>{
      try {
        const confirmation= await ConfirmBookings.findByIdAndRemove(req.params.id, req.body)
        res.send(confirmation)
      } catch (error) {
        res.status(500).json({message:"no appointments"})
        
      }
    })
    
    
      module.exports = router;
    