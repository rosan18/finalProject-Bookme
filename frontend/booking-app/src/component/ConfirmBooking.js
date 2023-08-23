/**import  { useState, useEffect } from 'react';
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
       .catch(err=>{
        console.log(err)
       
       })
      
    }

 if(!data?.length) return <div>loading...</div>

return (
  <div className='bookings'>
   
    <table>
      <th style={Style}>Name
        <td>{" "}{data.at(-1).name}</td>
    </th> 
    <th style={Style} >Service
       <td>{" "}{data.at(-1).service}</td>
    </th>
    <th style={Style} >Date
       <td>{" "}{data.at(-1).date}</td>
    </th>
    <th style={Style} >Cost
        <td>{" "}{data.at(-1).cost}</td>
    </th>
    
    <th style={Style} >Edit

   <td><i class="bi bi-pen"></i></td>
   </th>
 
  <th style={Style} >Delete
      <td><i class="bi bi-trash" onClick={ () => deleteHandler(data.at(-1))}></i></td> 
  </th>

   </table>
  </div>
 )
  
  }
  
export default ConfirmBooking;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConfirmBooking = () => {
  const [data, setData] = useState([]);

  const style = {
    color: 'rgb(97, 113, 154)',
    padding: '5px',
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/bookings')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteHandler = id => {
    axios
      .delete('http://localhost:5000/api/bookings/' + id)
      .then(res => {
        console.log(res.data);
        // You might want to update the data array after successful deletion
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!data.length) return <div>loading...</div>;

  return (
    <div className='bookings'>
      <table>
        <thead>
          <tr>
            <th style={style}>Name</th>
            <th style={style}>Service</th>
            <th style={style}>Date</th>
            <th style={style}>Cost</th>
            
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>{" "}{data.at(-1).name}</td>
              <td>{data.at(-1).service}</td>
              <td>{data.at(-1).date}</td>
              <td>{data.at(-1).cost}</td>
              <td>
                <i className="bi bi-pen">Edit</i> {/* Edit button */}
                <i className="bi bi-trash" onClick={() => deleteHandler(data.id)}>Delete</i> {/* Delete button */}
              </td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmBooking;
