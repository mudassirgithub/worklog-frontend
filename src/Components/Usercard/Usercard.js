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
                    <div className="tasks-list">
                        <span className="eachTask">describe the task  ....</span>
                        <span className="eachTask">describe the task  ....</span>
                    </div>
                </div>
                <div className="task-card" >
                    <div className="task-card-header">user</div>
                    <div className="tasks-list">
                        <span className="eachTask">describe the task  ....</span>
                        <span className="eachTask">describe the task  ....</span>
                    </div>
                </div>
                <div className="task-card" >
                    <div className="task-card-header">user</div>
                    <div className="tasks-list">
                        <span className="eachTask">describe the task  ....</span>
                        <span className="eachTask">describe the task  ....</span>
                    </div>
                </div>
                <div className="task-card" >
                    <div className="task-card-header">user</div>
                    <div className="tasks-list">
                        <span className="eachTask">describe the task  ....</span>
                        <span className="eachTask">describe the task  ....</span>
                    </div>
                </div>
                <div className="task-card" >
                    <div className="task-card-header">user</div>
                    <div className="tasks-list">
                        <span className="eachTask">describe the task  ....</span>
                        <span className="eachTask">describe the task  ....</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Usercard;