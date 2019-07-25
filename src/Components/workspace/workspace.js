import React from 'react';
import './workspace.css';
import Navbar from '../Navbar/Navbar';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import Usercard from '../Usercard/Usercard';
import Addtask from '../addtask/addtask';

class Workspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isAddingTasks: false
        };
      }
    render () {
        return (
            <div className='wrapper2'>
                <Navbar checkIfAddingTasks={this.checkIfAddingTasks}/>
                <Usercard />
                {this.state.isAddingTasks && <Addtask checkIfAddingTasks={this.checkIfAddingTasks}/>}
            </div>
            
        );
    }

    checkIfAddingTasks = (check) => {
            this.setState({
                isAddingTasks: check
            });
    }
}

export default Workspace;