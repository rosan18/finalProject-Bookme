import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



class Form extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);


    }
    state = {
        name: "",
        service: "finance",
        date: new Date(),
        cost: "3"
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold",
        color: "blue"

    }

    //event to handle all inputs
    handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        //to update the state

        this.setState({ [name]: value });

    }



    handleSubmit(e) {
        e.preventDefault()
        //console.log(this.state);






        axios.post('http://localhost:5000/api', this.state)
            .then(res => {
                console.log(res)
            })

            .catch((error) => {
                console.log(error)
            })
        this.setState({ name: '', service: '', date: '', cost: '' })
    }

    render() {
        return (

            <form className='form' onSubmit={this.handleSubmit}>
                <h2 style={this.styles}>Create appointment</h2>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input name='name' type="text" className="form-control" id="exampleFormControlInput1" value={this.state.name} onChange={this.handleChange} />

                    <label className="form-label">Service</label>
                    <input name='service' type="text" className="form-control " id="exampleFormControlInput1" value={this.state.service} onChange={this.handleChange} />

                    <label className="form-label"> Date</label>
                    <DatePicker 
                   name='date'
                   selected={this.state.date}
                   onChange={date=>this.handleChange(date)}>

             </DatePicker>


                   {/* <label className="form-label"> Date</label>
                    <input name='date'type="datetime-local" className="form-control" id="exampleFormControlInput1"  value={this.state.date} onChange={this.handleChange} />


*/}
                    <label className="form-label">Cost</label>
                    <input name='cost' type="text" className="form-control" id="exampleFormControlInput1" value={this.state.cost} onChange={this.handleChange} />
                </div>

                <input type="submit" value="Submit" className="btn btn-outline-success" />
            </form>

        )
    }

}
export default Form;