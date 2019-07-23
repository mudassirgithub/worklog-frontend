import React from 'react';
import './workspace.css';
import Navbar from '../Navbar/Navbar';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import Usercard from '../Usercard/Usercard';
import Sidebar from '../sidebar/sidebar';
import Addtask from '../Navbar/addtask/addtask';
import { BrowserRouter as Route } from 'react-router-dom'

class Workspace extends React.Component {
    render () {
        return (
            <div className='wrapper2'>
                <Navbar />
                <Sidebar />
                <Addtask />
                <Usercard />
                <Route path='/addtask' component={Addtask} />
            </div>
        );
    }
}

export default Workspace;