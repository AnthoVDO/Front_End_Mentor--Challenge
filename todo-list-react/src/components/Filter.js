import React from 'react';

const Filter = () => {
    return (
        <div className="filter">
        <div className="filter-items-left">5 items left</div>
        <div className="filter-select">
            <button className="filter-select-all">All</button>
            <button className="filter-select-active">Active</button>
            <button className="filter-select-completed">Completed</button>
        </div>
        <button className="filter-clear-completed">Clear Completed</button>
            
        </div>
    );
};

export default Filter;