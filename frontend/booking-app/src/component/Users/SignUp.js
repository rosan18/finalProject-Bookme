import  { useState } from 'react';
import axios from 'axios';
const SignUp =() => {
  const [user, setUser] = useState({
    fname:"",
    lname:"",
    email:"",
    password:"",
  

} 
)
    
  

 const  handleChange = (e) =>  {

    const name = e.target.name;
    const value = e.target.value;
    //to update the input user
    setUser({...user, [name]: value });

}
  const handleSubmit = (e) => {
  e.preventDefault();
  //const { fname, lname, email, password, } = user
  //console.log(fname,lname,email,password, )
if (user) {
alert('signup successful')
}else{
  alert('invalid input')
}
  axios.post('http://localhost:5000/api/signUp', user)
  .then(res => {
      console.log(res)
      setUser({ fname: '', lname: '', email: '', password: '' })
  })

  .catch((error) => {
      console.log(error)
  })




}
  
    
        return (
        <div>
        <h3>Registration</h3>
        <form onSubmit={handleSubmit}>
        <div class="mb-1">
    <label  class="form-label">First Name</label>
    <input name="fname"  value={user.fname}type="name" class="form-control" aria-describedby="emailHelp" onChange={handleChange}/>
    </div>
  <div class="mb-1">
    <label class="form-label">Last Name</label>
    <input onChange={handleChange}value={user.lname}  name="lname" type="name" class="form-control"  aria-describedby="emailHelp"  />
    </div>
  <div class="mb-1">
    <label class="form-label">Email </label>
    <input  onChange={handleChange} value={user.email}   name="email"  type="email" class="form-control" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-1">
    <label  class="form-label">Password</label>
    <input onChange={handleChange} value={user.password} name="password"  type="new-password" id="exampleInputPassword1"class="form-control" />
  </div>
 
 
  <button type="submit" value="Submit" class="btn btn-primary">Submit</button>
</form>
      </div>
        );
    }

 
export default SignUp;
