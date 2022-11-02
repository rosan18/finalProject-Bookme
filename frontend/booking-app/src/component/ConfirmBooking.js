import React, { Component } from 'react';
import axios from 'axios'



class ConfirmBooking extends Component {
   constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
   }
  
   state = {} 

   
  handleSubmit(e){
    e.preventDefault();
    
    axios.get('http://localhost:5000/api', this.state)
    .then(res => {
        console.log(res)
    })

    .catch((error) => {
        console.log(error)
    })
this.setState({ name: '', service: '', date: '', cost: '' })


  }

  render() { 
  
    return (
      <div>
      <form >
        <h3>Booking review</h3>
     
        <input onSubmit={this.handleSubmit}  type="submit" value="confrm" className="btn btn-outline-success" />
      </form>
      </div>
    );
  }
}
 
export default ConfirmBooking
;