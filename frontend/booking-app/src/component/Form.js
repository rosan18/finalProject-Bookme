import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDefault = this.handleDefault.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    state = {
        name: "",
        service: "finance",
        date: [],
        cost: "3"
    };

//to update the state
handleNameChange(e){
this.setState({ name:e.target.value});

}
handleDefault(){
    this.setState({
        ...this.state
    })
}


handleSubmit(e){
   e.preventDefault() 
    //console.log(this.state);
   
    




    axios.post('http://localhost:5000/api/', this.state)
.then(res =>{
    console.log(res)
})

.catch((error) => {
    console.log(error)
})
this.setState({name:'',service:'', data:[], cost:''})
}

render() {
    return (

        <form className='form' onSubmit={this.handleSubmit}> 
            <h2>Create appointment</h2>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.name} onChange={this.handleNameChange} />

                <label className="form-label">Service</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.service} onChange={this.handleDefault} />

               {/*<label className="form-label"> Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1" />
    */} 
                <label className="form-label">Cost</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={this.state.cost} onChange={this.handleDefault} />
            </div>

            <input type="submit" value="Submit"className="btn btn-outline-success" />
        </form>

    )
}

}
export default Form;