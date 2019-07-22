import React from 'react';
import './workspace.css';
import Navbar from '../Navbar/Navbar';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import Usercard from '../Usercard/Usercard';
// import Float from '../Float/Float';
import Sidebar from '../sidebar/sidebar';

class Workspace extends React.Component {
    render () {
        return (
            <div className='wrapper2'>
                <Navbar />
                <Sidebar />
                <Usercard />
                {/* <Float /> */}
            </div>
        );
    }
}

export default Workspace;