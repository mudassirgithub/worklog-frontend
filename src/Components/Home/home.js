import React from 'react';
import './home.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Route } from 'react-router-dom'
import Cover from '../Cover/Cover';
import Login from '../Login/Login';
import Join from '../Join/Join';

class Home extends React.Component {
    render () {
        return (
            <div className='wrapper'>    
                <Route exact path='/' component={Cover} />
                <Route path='/login' component={Login} />
                <Route path='/join' component={Join} />
          </div>
        );
    }
} 

export default Home;