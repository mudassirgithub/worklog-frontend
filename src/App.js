import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Workspace from './Components/workspace/workspace';
import Home from './Components/Home/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }
  
  render () {
    return (
      <Router>
            {this.state.loggedIn? <Redirect to='/logs' /> : <Home />}
            <Route path='/logs' exact strict render={() => (this.state.loggedIn? (<Workspace />) : (<Redirect to='/' />))} />
      </Router>
    );
  }
}

export default App
