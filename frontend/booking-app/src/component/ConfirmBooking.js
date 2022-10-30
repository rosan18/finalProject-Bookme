import React, { Component } from 'react';
//import { Form } from 'react-router-dom';

  class ConfirmBooking extends Component {
    state = {
      name:"",
      service:"",
      dateOfAppointment:""
      } 

    render() { 
        return (
            <div>
     <h2>Booking Details</h2>
     <form>
     <div className ="row mb-1">
  <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-lg">Name:</label>
  
  <div className="col-sm-5">
    <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
  </div>
  
</div>
<div className="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label-lg">Service:</label>
 {/**<div class="col-sm-10">
    <input type="email" class="form-control" id="colFormLabel" placeholder/>
  </div> */}
</div>
<div className="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">dateOfAppointment:</label>
  {/* <div class="col-sm-10">
    <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>
  </div>*/}
        </div>
     </form>
            </div>
        );
    }
  }
   
  export default ConfirmBooking;