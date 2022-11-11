import React, { Component } from 'react';
import axios from 'axios';
class SignUp extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    state = {
      fname:"",
      lname:"",
      email:"",
      password:"",
    
  
  } 
  

  handleChange(e) {

    const name = e.target.name;
    const value = e.target.value;
    //to update the input state
    this.setState({ [name]: value });

}
  handleSubmit(e){
  e.preventDefault();
  //const { fname, lname, email, password, } =this.state;
  //console.log(fname,lname,email,password, )

  axios.post('http://localhost:5000/api/users', this.state)
  .then(res => {
      console.log(res)
  })

  .catch((error) => {
      console.log(error)
  })
this.setState({ fname: '', lname: '', email: '', password: '' })


}
  
    render() { 
        return (
        <div>
        <h3>Registration</h3>
        <form onSubmit={this.handleSubmit}>
        <div class="mb-1">
    <label  class="form-label">First Name</label>
    <input name="fname"  value={this.state.fname}type="name" class="form-control" aria-describedby="emailHelp" onChange={this.handleChange}/>
    </div>
  <div class="mb-1">
    <label class="form-label">Last Name</label>
    <input onChange={this.handleChange}value={this.state.lname}  name="lname" type="name" class="form-control"  aria-describedby="emailHelp"  />
    </div>
  <div class="mb-1">
    <label class="form-label">Email </label>
    <input  onChange={this.handleChange} value={this.state.email}   name="email"  type="email" class="form-control" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-1">
    <label  class="form-label">Password</label>
    <input onChange={this.handleChange} value={this.state.password} name="password"  type="new-password" id="exampleInputPassword1"class="form-control" />
  </div>
 
 
  <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
</form>
      </div>
        );
    }
}
 
export default SignUp;
