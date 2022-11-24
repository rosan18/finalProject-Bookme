import React, { Component } from 'react';
import axios from 'axios';


class ConfirmBooking extends Component {
  constructor(){
    super()
   this.onClick=this.deleteBooking.bind(this)
  }
  
   
  
  state = {
    bookings: []
  }

 
  componentDidMount() {
    //get data from the database
    axios.get('http://localhost:5000/api/bookings',)
      .then(res => {
        (console.log(res.data))
        this.setState({ bookings: res.data })

      })

      .catch((error) => {
        console.log(error)
      });
    
}
 
    //delete a record based on the last id
   deleteBooking(id){
    axios
    .delete(`http://localhost:5000/api/bookings/'${this.state.bookings.id}`)
  
   .then(res => console.log('deleting data', res)).catch(err =>console.log(err))

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
    
    <button onClick={this.deleteBooking(lastBooking)}>delete</button>
      </div>
    )
  }
}

export default ConfirmBooking
  ;