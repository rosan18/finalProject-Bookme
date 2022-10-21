import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Finance extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>FINANCE SERVICES</h2><br />
                <h3>Our Tax Consultancy Service provides a wide range of accounting services. </h3><br />
                <p>Our staff has specialized knowledge and extensive experience in accounting, organization of financial services and more generally in all areas of economic activity.</p><br />
                <p>For more information, book an appointment with one of our consultant</p><br />

                <button className=" btn-outline-primary" type="submit" >
                <Link to={'/Form'} >
                   Book Now
                   </Link>
                </button>



            </div>
        );
    }
}

export default Finance;

