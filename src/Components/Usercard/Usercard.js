import React from 'react';
import './Usercard.css';


class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: null,
            allTasks:[],
            allUsers:[],
            isLoaded: false
        }
    }    
    render(){
        if (this.state.isLoaded === false) {
            return (
                <div className="ws-contents">
                    <div className="task-card" >
                        <div className="tasks-list">
                            <span className="eachTask">Loading...</span>
                        </div>
                    </div>
                </div>   
            );
        } else {
            return(
                <div className="ws-contents">
                    {this.state.allTasks.map((task, i) => (
                        <div className="task-card" key={i}>
                            <div className="task-card-header">{task.user_id}</div>
                            <div className="tasks-list">
                                <span className="eachTask">{task.description}</span>
                            </div>
                        </div>   
                    ))}  
                </div>
            );    
        }  
    }

    

}

export default Usercard;