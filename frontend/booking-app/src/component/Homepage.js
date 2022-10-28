import React, { Component} from "react";

class Homepage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='home'>
                <img src={require('./Image/home_img.jpg')}class="img-fluid" alt="..." />
            </div>
        );
    }
}
 
export default Homepage;