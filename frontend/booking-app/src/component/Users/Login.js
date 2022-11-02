import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = { 
        email:"",
        password:""
     } 
//Event handler
     handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        //to update the input state
    
        this.setState({[name]: value });
       
    }
    handleSubmit(e){
   // e.preventDefault();
     console.log(this.state.email)
    }
    render() { 
        return (
            <div>
                <h3>Log In</h3>
            <form onSubmit={this.handleSubmit} className='User'>
    
  <div className="mb-1">
    <label className="form-label">Email </label>
    <input  onChange={this.handleChange} value={this.state.email}   name="email"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-1" >
    <label className="form-label">Password</label>
    <input onChange={this.handleChange} value={this.state.password} name="password"  type="current-password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary" className='Btn2'>Submit</button>
</form>
<p className='User'>Don't Have an Account: <Link to ={"/SignUp"}>Sign up</Link></p>
</div>
        );
    }
}
 
export default Login;