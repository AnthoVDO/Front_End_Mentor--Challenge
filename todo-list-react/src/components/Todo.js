import React from 'react';
import { ImCross } from "react-icons/im";

const Todo = ({lists, completed, deletTask}) => {
    return (
        <div className="todo">
{
            lists.map(el=>{
                return(
                    <div className="todo-list" key={el.id} id={el.id}>
           <input className="todo-list-check" type="checkbox" name={el.id+"name"} checked={el.checked} onChange={completed}/>
           <label htmlFor={el.id+"name"}>{el.task}</label>
           <button onClick={deletTask}><ImCross/></button>
           </div>
                )
                
            })}





           
        </div>
    );
};

export default Todo;