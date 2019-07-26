import React from 'react';
import './Navbar.css';
import logo from './logo-square.png';
import add from './add2.png';
import signout from './signout.png'


class Navbar extends React.Component{
    render() {
        return(
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo}alt={'logoimage'}/>
                </div>
                <div className="nav-options">
                        <button className="nav-logo" onClick={this.taskModalHandle}><img src={add} alt={'add-icon'}/></button>
                        <button className="nav-logo"><img src={signout} alt={'signout-icon'}/></button>
                        
                </div>
            </nav>
        );  
    }
     
    taskModalHandle = () => {
        this.props.checkIfAddingTasks(true);
        
    }
}

export default Navbar;