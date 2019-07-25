import React from 'react';
import './Navbar.css';
import logo from './logo-square.png';
import add from './add2.png';
import signout from './signout.png'
// import { BrowserRouter as Link } from "react-router-dom";


class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo}alt={'logoimage'}/>
                </div>
                <div className="nav-options">
                        <div className="nav-logo">
                            <img src={add} alt={'add-icon'}/>
                        </div>
                        <div className="nav-logo">
                            <img src={signout} alt={'signout-icon'}/>
                        </div>
                </div>
            </nav>
        );  
    }
}

export default Navbar;