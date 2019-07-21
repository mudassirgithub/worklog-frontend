import React from 'react';
import logo from './logo.png';
import './Cover.css';

class Cover extends React.Component{
   
    render(){
        return (
            <div className="intro">
                <div className='logo'>
                    <img src={logo}alt={'logoimage'}/>
                </div>
                <span>Worklog is a collaborative tool for workspaces to log todo's...</span>
                <div>
                    <button type="button" onClick={this.props.getJoin} name="join" className="c-btn">Join</button>
                    <button type="button" onClick={this.props.getLogin} name="login" className="c-btn">Log in</button>

                </div>
            </div>
        );
    }
}

export default Cover;