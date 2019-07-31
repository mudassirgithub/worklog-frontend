import React from 'react';
import './Usercard.css';


class Usercard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            allTasks:[],
            allUsers:[],
            isLoaded: false,
            msg: "Loading..."
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
        // if (this.state.allTasks.length === 0 || this.state.allUsers.length === 0) {
        //     this.setState({ msg: "error occured while loading" });
        // } else {
        //     this.setState({ msg: "loading..." });
        //     // var cards = []
        //     // var card = {
        //     //     "user_name": "",
        //     //     "tasks": []
        //     // }
        //     // var name;
        //     // for (var i = 0; i < this.state.allTasks.length; i++) {
        //     //     for (var j = 0; j < this.state.allUsers.length; j++) {
        //     //         if (i.user_id === j.id) {
        //     //             card["user_name"] = name;
        //     //             return;
        //     //         }
        //     //     }
        //     //     card["tasks"].push = i.description
        //     // }
        //     this.setState({isLoaded: true })
        // } 
    }

   


    render(){
        if (!this.state.isLoaded) {
            return (
                <div className="ws-contents">
                    <div className="task-card" >
                        <div className="tasks-list">
                            <span className="eachTask">{this.state.msg}</span>
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