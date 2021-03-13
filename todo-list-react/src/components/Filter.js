import React from 'react';

const Filter = ({filterTask, clearComplet}) => {
    return (
        <div className="filter">
        <div className="filter-items-left">5 items left</div>
        <div className="filter-select">
            <button onClick={filterTask} className="filter-select-all">All</button>
            <button onClick={filterTask} className="filter-select-active">Active</button>
            <button onClick={filterTask} className="filter-select-completed">Completed</button>
        </div>
        <button className="filter-clear-completed" onClick={clearComplet}>Clear Completed</button>
            
        </div>
    );
};

export default Filter;