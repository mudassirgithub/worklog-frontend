import React from 'react';
import './Usercard.css';


class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            allTasks:[],
            allUsers:[]
        };
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url1 = "http://getworklog.herokuapp.com/alltasks";
        const url2 = "http://getworklog.herokuapp.com/allusers"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url1, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then((data) => {
          this.setState({ allTasks: data })
        })
        .catch(console.log)
        fetch(proxyurl + url2, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then((data) => {
        this.setState({ allUsers: data })
        })
        .catch(console.log)
    }


    render(){
        if (this.state.allTasks.length == 0 && this.state.allUsers == 0) {
            return (
                <div className="ws-contents">
                    <div className="task-card" >
                        <div className="tasks-list">
                            <span className="eachTask">Loading ....</span>
                        </div>
                    </div>
                </div>   
            );
        } else {
            return(
                <div className="ws-contents">
                    <div className="task-card" >
                        <div className="task-card-header">user</div>
                        <div className="tasks-list">
                            <span className="eachTask">describe the task  ....</span>
                        </div>
                    </div>
                </div>
            );    
        }  
    }

    

}

export default Usercard;