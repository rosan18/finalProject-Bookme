import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ConfirmBooking = () => {
  const navigate = useNavigate();
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
    if (data !== " ") {
      alert('booking deleted')
  }

    axios
      .delete('http://localhost:5000/api/bookings/' + id)
      .then(res => {
        console.log(res.data);
        // Update data state by filtering out the deleted booking
        setData(data.filter(item => item._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
      setData(currentData => currentData.filter(item => item._id !== id)); 
      
      navigate("/Form" )
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
                <i className="bi bi-trash" onClick={() => deleteHandler(data.at(-1)._id)}>Delete</i> {/* Delete button */}
              </td>
            </tr>
        
        </tbody>
      </table>
    </div>
  );
};

export default ConfirmBooking;