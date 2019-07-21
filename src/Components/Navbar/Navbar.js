import React from 'react';
import './Navbar.css';
import logo from './logos.png';


class Navbar extends React.Component{
    render(){
        return(
            <nav className ="navbar">
                <div className = "nav-logo">
                    <img src={logo}alt={'logoimage'}/>
                </div>
                <button className="nav-btn">Example</button>
            </nav>
        );
    }
}

export default Navbar;