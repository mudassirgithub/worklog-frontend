import React from 'react'
import logo from './logo.png'
import './Cover.css'
import { Link } from 'react-router-dom'

class Cover extends React.Component {
  render () {
    return (
      <div className='intro'>
        <div className='logo'>
          <img src={logo} alt={'logoimage'} />
        </div>
        <span>
          Worklog is a collaborative tool for workspaces to log todo's...
        </span>
        <div>
          <Link exact to="/join">
          <button
            type='button'
            className='c-btn'
          >
            Join
          </button>
          </Link>
          
          <Link exact to="/login">
          <button
            type='button'
            className='c-btn'
          >
            Login
          </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Cover;
