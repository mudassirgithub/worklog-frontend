import React from 'react';
import './home.css';
import { Route } from 'react-router-dom'
import Cover from '../Cover/Cover';
import Login from '../Login/Login';
import Join from '../Join/Join';

class Home extends React.Component {
    render () {
        return (
            <div className='wrapper'>    
                <Route exact strict path='/' component={Cover} />
                <Route exact strict path='/join' component={Join} />
                <Route exact strict path='/login' component={Login} />
          </div>
        );
    }
} 

export default Home;