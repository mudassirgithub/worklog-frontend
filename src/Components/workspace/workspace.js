import React from 'react';
import './workspace.css';
import Navbar from '../Navbar/Navbar';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import Usercard from '../Usercard/Usercard';
import Addtask from '../addtask/addtask';
// import { BrowserRouter as Route } from 'react-router-dom';

class Workspace extends React.Component {
    render () {
        return (
            <div className='wrapper2'>
                <Navbar />
                <Usercard />
                <Addtask />
                {/* <Route path='/logs' component={Usercard} />
                <Route path='/addtask' component={Addtask} /> */}
            </div>
        );
    }
}

export default Workspace;