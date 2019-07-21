import React from 'react';
import './Filter.css';


class Filter extends React.Component{
    render(){
        return(
            <div className="filter-header">
                <select name="user-filter" className="c-btn">
                    <option selected >All</option>
                    <option>user1</option>
                    <option>user2</option>
                    <option>user3</option>

                </select>

                <select name="date-filter" className="c-btn">
                    <option selected >Today</option>
                    <option>yesterday</option>
                    <option>week</option>
                    <option>month</option>

                </select>

            </div>
        );
    }
}

export default Filter;