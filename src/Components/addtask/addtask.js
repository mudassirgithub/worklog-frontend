import React from 'react'
import './addtask.css'

class Addtask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            user_id: ""
        };
    }

    render () {
        return (
            <div id="page-mask" >
                <form className="task-modal" role="dialog" ref={node => this.node = node}>
                    <input autoFocus onChange={this.editTask} required className="task-input" type="text" name="task" placeholder="Write your task here.."></input> 
                    <button type='submit' onClick={this.onSubmitTaskForm} className='task-btn'>Add</button>
                </form>
            </div>
            
        );
    }

    editTask = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitTaskForm = () => {
        
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            return (this.props.checkIfAddingTasks(false));
        }
    }

}    

export default Addtask;