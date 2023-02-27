import  { useState, useEffect } from 'react';
import axios from 'axios';


const ConfirmBooking = () => {
  //track state
  const [data,setData] = useState([])

  const Style  =  {
   color: 'rgb(97, 113, 154)',
   padding: '5px'

  }

//GET data
 useEffect(() => {
  axios
    .get('http://localhost:5000/api/bookings')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
 }, [])
  //DELETE data
 const deleteHandler =(id) =>{
    axios
       .delete('http://localhost:5000/api/bookings/'+id)
       .then(res => {
        console.log(res.data);
      
       }
       )
       .catch(error =>{
        console.log(error)
       
       })
      
    }

 if(!data?.length) return <div>loading...</div>

return (
  <div className='bookings'>
   
    
    <h4 style={Style}>Name:{" "}{data.at(-1).name}</h4> 
    <h4 style={Style} >Service:{" "}{data.at(-1).service}</h4>
    <h4 style={Style} >Date:{" "}{data.at(-1).date}</h4>
    <h4 style={Style} >Cost:{" "}{data.at(-1).cost}</h4><br></br>
    <button  className='Btn'>Edit</button>
    <button  className='Btn' onClick={ () => deleteHandler(data.at(-1))} >Delete</button>
  </div>
 )
  
  }
  
export default ConfirmBooking;