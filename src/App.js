import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { BrowserRouter as Router} from 'react-router-dom'
import Workspace from './Components/workspace/workspace';
import Home from './Components/Home/home';

// const LOGIN = false;
const LOGIN = true;

class App extends Component {
  render () {
    return (
      <Router>
        {LOGIN ? <Workspace /> : <Home />}
      </Router>
    );
  }
}

export default App
