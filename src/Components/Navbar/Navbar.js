import React from 'react';
import './Navbar.css';
import logo from './logo-square.png';
import bell from './bell.png';
import user from './user.png';
import add from './add2.png';


class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo}alt={'logoimage'}/>
                </div>
                <div className="nav-options">
                    <div className="nav-logo">
                        <a href="/addtask" onClick={() => {this.props.history.replace('/addtask')}}><img src={add} alt={'add-icon'}/></a>
                    </div>
                    <div className="nav-logo">
                        <img src={bell} alt={'bell-icon'}/>
                    </div>
                    <div className="nav-logo">
                        <img src={user} alt={'user-icon'}/>
                    </div>
                    
                </div>
            </nav>
        );  
    }
}

export default Navbar;