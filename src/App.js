import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cover from './Components/Cover/Cover';
// import Join from './Components/Join/Join';
// import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Float from './Components/Float/Float';
import Filter from './Components/Filter/Filter';
import Usercard  from './Components/Usercard/Usercard'










class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      cover: false,
      join: false,
      login: false,
      ifError: false
    };
  }


  render(){
      return (
        // <div className="wrapper">
          <div className="wrapper2">
          <Navbar/>
          <Float/>
          <Filter/>
          <Usercard/>
            {this.state.cover?<Cover getJoin={this.getJoin} getLogin={this.getLogin}/> : ""}
            {/* {this.state.join?<Join ifError={this.state.ifError}/> : ""}
            {this.state.login?<Login ifError = {this.state.ifError} /> : ""} */}

         </div>
      );
    }

  getJoin = () => {
    this.setState({
      cover: false,
      join: true,
      login: false
    });
    // history.pushState(stateData);
  }

  getLogin = () => {
    this.setState({
      cover: false,
      join: false,
      login: true
    });
    // history.pushState(stateData);
  }

  getCover = () => {
    this.setState({
      cover: true,
      join: false,
      login: false
    });
  }

  
  }

  



export default App;
