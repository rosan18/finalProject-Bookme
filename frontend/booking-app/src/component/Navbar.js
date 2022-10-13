import React, { Component } from 'react';
import Homepage from './Homepage';

class Navbar extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar navbar-light bg-primary">
                    <div class="container-fluid">
                        <h1 class="navbar-brand" href="#">Book me!</h1>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="frontend\booking-app\src\component\Homepage.js">Home</a>
                                    
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Finance</a></li>
                                        <li><a class="dropdown-item" href="">Health</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                               
                            </ul>
                            <form class="d-flex">
                                
                                    <button class="btn btn-light" type="submit">Log In</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;