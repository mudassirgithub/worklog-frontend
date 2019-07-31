import React from 'react'
import './Login.css'
import ErrorCmp from '../ErrorCmp/ErrorCmp'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginError: ''
    }
  }

  componentDidMount() {
    const checkError = localStorage.getItem("loginError");
    if (checkError != null) {
      this.setState({
        loginError : checkError
      });
    }

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("loginError", "");
    });
  }

  render () {
    return (
      <div className='card-login'>
        <div className='card-title'>
          <h1>LOGIN</h1>
        </div>
        {this.state.loginError && <ErrorCmp error={this.state.loginError}/>}
        <div className='card-item'>
          <label>Username</label>
          <input
            type='text'
            required
            onChange={this.onChange}
            name='username'
            autoFocus
            placeholder='username'
            pattern='[a-z0-9]{6,18}'
            title='use no special ,Uppercase characters & length upto six to eighteen'
          />
        </div>
        <div className='card-item'>
          <label>Password</label>
          <input
            type='password'
            required
            placeholder='enter password'
            onChange={this.onChange}
            name='password'
            pattern='.[A-Za-z0-9]{6,10}'
            title='use no special characters & length upto six to ten'
          />
        </div>

        <div className='card-btn'>
          <button type='submit' onClick={this.onSubmitLoginForm} className='c-btn'>
            Login
          </button>
        </div>
      </div>
    )
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitLoginForm = () => {
    fetch('http://getworklog.herokuapp.com/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data  => {
        if (data["hasError"] === true) {
          localStorage.setItem("loginError", data["msg"]);
        } else {
          localStorage.setItem("loggedIn", true);
          this.props.history.replace('/logs');
        }
      })
  }
}

export default Login;
