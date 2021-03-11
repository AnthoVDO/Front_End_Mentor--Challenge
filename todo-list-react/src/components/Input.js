import React from 'react';
import { GrAddCircle } from "react-icons/gr";

const Input = ({NewComponent}) => {
    return (
        <div className="input">
        <form action="submit">
            <input 
            className="input-check"
            type="checkbox" 
            name="add" 
            id="add"/>
            <input 
            className="input-field"
            type="text" 
            placeholder="Add a task"/>
            <button className="input-btn" onClick={NewComponent}><GrAddCircle/></button>
        </form>
            
        </div>
    );
};

export default Input;