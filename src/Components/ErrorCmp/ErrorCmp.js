import React from 'react'
import './ErrorCmp.css'

class ErrorCmp extends React.Component {
  render () {
    return (
      <div id="error-display" className='alert-danger centered' role='alert'>
        <span>{this.props.error}</span>
      </div>
    )
  }
}

export default ErrorCmp
