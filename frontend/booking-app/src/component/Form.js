import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Form = () => {
  const navigate = useNavigate();
  const [myState, setMyState]  = useState({
    name: "",
    service: "finance",
    date: new Date(),
    cost: "3$"
});
   //event to handle all inputs except datepicker
    const handleChange = (e)=> {
     // const { name, value} = e.target; 
      const name = e.target.name;
      const value = e.target.value
       
        //to update the input myState
setMyState
  ({...myState, [name]: value });

    }
  const handleDateChange = (date) => {
    setMyState({
      ...myState,
      date:date
    })
  }
   const handleSubmit = (e) => {
       e.preventDefault();
      if (myState !== "") {
            alert('booking success')
        }

         //Add data to database
          axios.post('http://localhost:5000/api/bookings', myState)
            .then(res => {
            setMyState
            (res.data);
            console.log(res);
            //redirect to another page
             navigate('/ConfirmBooking')     
            })

            .catch((error) => {
                console.log(error)
            })
        }
 return (

            <form className='form' onSubmit={handleSubmit} >
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
                             startDate = {new Date()}
                             minDate={new Date()}
                             filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}

                        />

                                 </div>
                 
                      
                        <label className="form-label">Cost</label>
                    <input name='cost' type="text" className="form-control" id="exampleFormControlInput1" value={myState.cost} onChange={handleChange} />
                </div>
                
               <button >Submit</button>
                 
            </form>

        )
    

}
export default Form;