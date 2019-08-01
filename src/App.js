import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Workspace from './Components/workspace/workspace';
import Home from './Components/Home/home';

class App extends Component {
  render () {
    return (
      <Router>
            <Home />
            {/* <Route path='/logs' exact strict component={Workspace} /> */}
      </Router>
    );
  }
}

export default App
