import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cover from './Components/Cover/Cover'
import Join from './Components/Join/Join'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Float from './Components/Float/Float'
import Filter from './Components/Filter/Filter'
import Usercard from './Components/Usercard/Usercard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const LOGIN = false

class App extends Component {
  render () {
    return (
      <Router>
        {LOGIN ? (
          <div className='wrapper2'>
            <Navbar />
            <Float />
            <Filter />
            <Usercard />
          </div>
        ) : (
          <div className='wrapper'>
            <Route exact path='/' component={Cover} />
            <Route path='/login' component={Login} />
            <Route path='/join' component={Join} />
          </div>
        )}
      </Router>
    )
  }

  // onRouteChange = withRouter(({ history })  => { history.push('/login')});
}

export default App
