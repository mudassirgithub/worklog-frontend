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

  render () {
    return (
      <div className='card-login'>
        <div className='card-title'>
          <h1>LOGIN</h1>
        </div>
        {this.state.loginError && <ErrorCmp />}
        <div className='card-item'>
          <label>Username</label>
          <input
            type='text'
            required
            onChange={this.onChange}
            name='username'
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
          <button type='submit' className='c-btn'>
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
}

export default Login
