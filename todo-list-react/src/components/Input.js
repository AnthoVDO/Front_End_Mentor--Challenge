import React from 'react';
import { GrAddCircle } from "react-icons/gr";

const Input = () => {
    return (
        <div className="input">
        <form action="submit">
            <input type="text" placeholder="Add a task"/>
            <button><GrAddCircle/></button>
        </form>
            
        </div>
    );
};

export default Input;