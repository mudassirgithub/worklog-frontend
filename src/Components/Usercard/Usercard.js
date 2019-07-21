import React from 'react';
import './Usercard.css';


class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            workspace:"",
            taskDes: ""

        };
    }
    render(){
        return(
            <div className="ws-contents">
                <div className="task-card" >
                    <div className="task-card-header">user</div>
                    <div className="task-card-list">
                        <div className="tasks">
                            <span>task description ....</span>
                            <span>+</span>
                        </div>
                        <div className="tasks">
                            <span>describe the task  ....</span>
                            <span>+</span>
                        </div>
                    </div>

                </div>
                <div className="task-card" >
                <div className="task-card-header">user</div>
                <div className="task-card-list">
                    <div className="tasks">
                        <span>describe the task  ....</span>
                        <span>+</span>
                    </div>
                    <div className="tasks">
                        <span>describe the task  ....</span>
                        <span>+</span>
                    </div>
                </div>

            </div>
            <div className="task-card" >
            <div className="task-card-header">user</div>
            <div className="task-card-list">
                <div className="tasks">
                    <span>describe the task  ....</span>
                    <span>+</span>
                </div>
                <div className="tasks">
                    <span>describe the task  ....</span>
                    <span>+</span>
                </div>
            </div>

        </div>
    </div>
        );
    }
}
export default Usercard;