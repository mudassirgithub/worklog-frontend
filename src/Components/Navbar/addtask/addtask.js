import React from 'react'
import './addtask.css'

class Addtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            user_id: "",
            workspace_id: ""
        };
    }

    render () {
        return (
            <dialog className="page-mask">
                <form className="task-modal" role="dialog">
                    <input autoFocus onChange={this.editTask} required className="task-input" type="text" name="task" placeholder="Write your task here.."></input> 
                    <button type='submit' onClick={this.onSubmitTaskForm} className='task-btn'>Add</button>
                </form>
            </dialog>

            
        );
    }

    editTask = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitTaskForm = () => {
        fetch('http://getworklog.herokuapp.com/addtask', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            task: this.state.task,
            user_id: this.state.user_id,
            workspace_id: this.state.workspace_id
          })
        })
    }

}    

export default Addtask;