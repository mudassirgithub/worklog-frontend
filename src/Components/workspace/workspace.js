import React from 'react';
import './workspace.css';
import Navbar from '../Navbar/Navbar';
import Filter from '../Filter/Filter';
import Usercard from '../Usercard/Usercard';
import Float from '../Float/Float';

class Workspace extends React.Component {
    render () {
        return (
            <div className='wrapper2'>
                <Navbar />
                <Filter />
                <Usercard />
                <Float />
            </div>
        );
    }
}

export default Workspace;