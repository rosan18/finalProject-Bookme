import { useState } from 'react';
import { Link } from 'react-router-dom';
import  axios from 'axios'
const Login = () => {
    const [signIn, setSignIn] = useState({
      email:"",
      password:""
    })
    
//Event handler
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        //to update the input signIn
    
        setSignIn({...signIn, [name]: value });
       
    }
  const  handleSubmit = (e) => {
    e.preventDefault();
    if (signIn) {
      alert('login successful')
      }else{
        alert('invalid input')
      }
        axios.post('http://localhost:5000/api/login', signIn)
        .then(res => {
            console.log(res)
            setSignIn({  email: '', password: '' })
        })
      
        .catch((error) => {
            console.log(error)
        })
    }
    
        return (
            <div>
                <h3>Log In</h3>
            <form onSubmit={handleSubmit} className='User'>
    
  <div className="mb-1">
    <label className="form-label">Email </label>
    <input  onChange={handleChange} value={signIn.email}   name="email"  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-1" >
    <label className="form-label">Password</label>
    <input onChange={handleChange} value={signIn.password} name="password"  type="current-password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary" className='Btn2'>Submit</button>
</form>
<p className='User'>Don't Have an Account: <Link to ={"/SignUp"}>Sign up</Link></p>
</div>
        );
  
}
 
export default Login;