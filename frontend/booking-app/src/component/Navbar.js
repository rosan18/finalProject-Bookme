import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    
   
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-light ">
                    <div className="container-fluid">
                        <h1 className="navbar-brand" href="#">Book me!</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/*
                                    <a class="nav-link active" aria-current="page">Home</a>*/}
                                    <Link to='/' className="nav-link active"  >Home</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/*<li><a class="dropdown-item" href="#">Finance</a></li>*/}
                                        <Link to='/Finance' className="dropdown-item">Finance </Link>
                                        <li><a className="dropdown-item" href="#">Health</a></li>


                                    </ul>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <Link to={"/Login"}>
                                    <button class="btn btn-light" type="submit">Log In</button>
                                </Link>

                            </form>

                        </div>

                    </div>
                </nav>

            </div>
        );
    
}

export default Navbar;