import React from 'react';
import './Usercard.css';


class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            allTasks:[],
            allUsers:[],
            isLoaded: false
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
            var temp = [...data["all_tasks"]]
            this.setState({ allTasks: temp })
        })
        .catch(console.log)
        fetch(proxyurl + url2, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then((data) => {
            var temp2 = [...data["all_users"]]
            this.setState({ allUsers: temp2 })
            })
        .catch(console.log)
        this.setState({isLoaded: true})
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