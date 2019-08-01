import React from 'react'
import './Login.css'
import ErrorCmp from '../ErrorCmp/ErrorCmp';
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginError: ''
    }
  }
  
  onSubmitLoginForm = () => {
    console.log("login");
    this.props.history.push('/logs');
  }

  render () {
    return (
      <form className='card-login'>
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
            pattern='[A-Za-z0-9]{6,10}'
            title='use no special characters & length upto six to ten'
          />
        </div>

        <div className='card-btn'>
        <Link to='/logs'><button type='submit' onClick={this.onSubmitLoginForm} className='c-btn'>
            Login
          </button></Link>
        </div>
      </form>
    )
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
}

export default Login;
