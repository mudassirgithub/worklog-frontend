import React from 'react';
import './Login.css';
// import ErrorCmp from './ErrorCmp/ErrorCmp';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            loginError: "daaDAda"
        };
    
    }

    render(){
        return(
            <div className ="card">
                <div className="card-title">
                <h1>LOGIN</h1> 
                </div>
                <div className="card-item">
                <label>Username</label>
                <input type = "text" required onChange = {this.onChange} name="username" placeholder="@ username"></input>
                </div>
                <div className="card-item">
                <label>Password</label>
                <input type = "password" required placeholder="enter password" onChange = {this.onChange} name="password" pattern = ".{6,10}" title="use any characters upto length six to ten"></input>
                </div>
                
                <div className="card-btn">
                <button type="submit" className="c-btn">Login</button>
            </div>

            </div>
        );
    } 
    
    
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

}

export default Login;