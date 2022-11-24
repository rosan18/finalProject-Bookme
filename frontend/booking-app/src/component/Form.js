import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Link } from 'react-router-dom'



const Form = () => {
  const [myState, setMyState]  = useState({
    name: "",
    service: "finance",
    date: new Date(),
    cost: "3$"
});
    
   

    //event to handle all inputs except datepicker
    const handleChange = name => (e)=> {

        const name = e.target.name;
       const value = e.target.value;
        //to update the input myState

  setMyState
  ({...myState, [name]: value });

    }
    //event to handle datepicker input
    const handleDateChange = (date) => {
        //update the date myState
setMyState
({
            date: date
        })
    }


    const handleSubmit = (e) => {
       e.preventDefault();
       const { name, service, date, cost } = myState;
       const details = { name, service, date, cost };
        //console.log(this.myState);
        if (details !== "") {
            alert('booking success')
        }


          axios.post('http://localhost:5000/api/bookings', details)
            .then(res => {
        setMyState
        (res.data);
              console.log(res);
                  
            })

            .catch((error) => {
                console.log(error)
            })
        


    }


    
        return (

            <form className='form'  onSubmit={handleSubmit} >
                <h2  className="headerForm">Create appointment</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" id="exampleFormControlInput1" value={myState.name} onChange={handleChange} />

                    <label className="form-label">Service</label>
                    <input name='service' type="text" className="form-control " id="exampleFormControlInput1" value={myState.service} onChange={handleChange} />

                    <label className="form-label"> Date</label>
                    <div>
                        <DatePicker

                            selected={myState.date}
                            onChange={handleDateChange}
                            name='date'
                        />

                    </div>




                    {/* <label className="form-label"> Date</label>
                    <input name='date'type="datetime-local" className="form-control" id="exampleFormControlInput1"  value={this.myState.date} onChange={this.handleChange} />


*/}
                    <label className="form-label">Cost</label>
                    <input name='cost' type="text" className="form-control" id="exampleFormControlInput1" value={myState.cost} onChange={handleChange} />
                </div>
                {/*<Link to={'/ConfirmBooking'} style={{ textDecoration: 'none' }}>*/}
                <input type="submit" value="Submit" className="btn btn-outline-success" />
               {/** </Link> */}
                 
            </form>

        )
    

}
export default Form;