import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cover from './Components/Cover/Cover'
import Join from './Components/Join/Join'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Workspace from './Components/workspace/workspace';

const LOGIN = false;
// const LOGIN = true;

class App extends Component {
  render () {
    return (
      <Router>
        {LOGIN ? <Workspace /> : (
          <div className='wrapper'>
            <Route exact path='/' component={Cover} />
            <Route path='/login' component={Login} />
            <Route path='/join' component={Join} />
          </div>
        )}
      </Router>
    )
  }

}

export default App
