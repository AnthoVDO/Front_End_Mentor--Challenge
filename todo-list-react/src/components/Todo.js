import React from 'react';
import { ImCross } from "react-icons/im";

const Todo = () => {
    return (
        <div className="todo">
           <div className="todo-list">
           <input className="todo-list-check" type="checkbox" name="test" id="001"/>
           <label htmlFor="test">Complet javascript course</label>
           <button><ImCross/></button>
           </div>
        </div>
    );
};

export default Todo;