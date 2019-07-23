import React from 'react'
import logo from './logo.png'
import './Cover.css'

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
          <button
            type='button'
            className='c-btn'
            onClick={() => {
              this.props.history.push('/join')
            }}
          >
            Join
          </button>

          <button
            type='button'
            className='c-btn'
            onClick={() => {
              this.props.history.push('/login')
            }}
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Cover
