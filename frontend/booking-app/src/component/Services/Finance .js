import React from 'react';
import { Link } from 'react-router-dom';

 const Finance = ()=> {
    
    
        return (
            <div className=' finance'>
                <div className='items'>
                <h2 >FINANCE SERVICES</h2><br />
                <h3>Our Tax Consultancy Service provides a wide range of accounting services. </h3><br />
                <p>Our staff has specialized knowledge and extensive experience in accounting, organization of financial services and more generally in all areas of economic activity.</p><br />
                <p>For more information, book an appointment with one of our consultant</p><br />
                
                <button type="button" class="Btn">
                <Link to={'/Form'} style={{ textDecoration: 'none' }}>
                   Book Now
                   </Link>
                   </button>
               
                </div>


            </div>
        );
    
}

export default Finance;

