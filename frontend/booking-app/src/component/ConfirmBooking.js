import React, { Component } from 'react';
import axios from 'axios';


class ConfirmBooking extends Component {
  
   
  
  state = {
    bookings: []
  }


 
  componentDidMount() {
    axios.get('http://localhost:5000/api/bookings',)
      .then(res => {
        (console.log(res.data))
        this.setState({ bookings: res.data })

      })

      .catch((error) => {
        console.log(error)
      });
}


render() {
  if(!this.state.bookings?.length){
    return <div>loading...</div>
  }
  const lastBooking = this.state.bookings.pop();
      return (
      <div className='confirm'> 
    <h3>Name:{lastBooking.name}</h3>
    
    <h3>Service:{lastBooking.service}</h3>
    
    
    <h3>Date: {lastBooking.date}</h3>
    
    
    <h3>Cost:{lastBooking.cost}</h3>
    
    <button >delete</button>
      </div>
    )
  }
}

export default ConfirmBooking
  ;