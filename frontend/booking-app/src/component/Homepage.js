import React, { Component } from 'react';

class Homepage extends Component {
    state = {}
    render() {
        return (
            <div className='home'>
                <img src={require('./Image/home_img.jpg')} height={200} width={200}/>
            </div>
        );
    }
}

export default Homepage;