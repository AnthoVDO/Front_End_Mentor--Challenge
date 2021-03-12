import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Input from './Input';
import Todo from './Todo';
import {useState} from 'react';
const Container = () => {

    const [lists, setLists] = useState([{
        id:1,
        checked:true,
        task:"Complete online JavaScript course"
    },
    {   
        id:2,
        checked:false,
        task:"Jog around the park 3x"
    },
    {   id:3,
        checked:false,
        task:"10 minutes meditation"
    },
    {   id:4,
        checked:false,
        task:"Read for 1hour"
    },
    { id:5,
        checked:false,
        task:"Pick up groceries"
    },
    { id:6,
        checked:false,
        task:"Complete ToDo App on FrontEnd Mentor"
    }])

    const [filter, setFilter] = useState([...lists]);
    const [filterProp, setFilterProp] = useState("All")
//creat new task
    const NewComponent = (e) => {
        e.preventDefault();
        let id = new Date();
        id = parseInt(Date.parse(id), 16); //The created date is transformed in millisecond and then to hexacode
        const text = e.currentTarget.previousSibling.value;
        const checked = e.currentTarget.parentNode.querySelector('.input-check').checked;
        let newTask = {id:id, checked: checked, task:text };
        e.currentTarget.previousSibling.value = "";
        return(setLists([...lists, newTask], filterTask));
    }
// mark as completed
    const completed = (e) => {
        const myElement = e.target.parentNode.id;
        setLists(lists.map((el)=> el.id.toString() === myElement? {...el, checked: !el.checked} : el));
    }

// delet a task
    const deletTask = (e) => {
        const myElement = e.currentTarget.parentNode.id;
        console.log(myElement)
        setLists(lists.filter(el=>el.id.toString() !== myElement ));
    }
// filter 
    const filterTask = (e) => {
        setFilterProp(e.currentTarget.innerText.toString());
        if(filterProp === "All"){
            setFilter(...lists);
        }else if(filterProp === "Active"){
            let tempFilter = [...lists];
            setFilter(tempFilter.filter(el=>{
                return el.checked === true;
            }))
        }else{
            let tempFilter = [...lists];
            setFilter(tempFilter.filter(el=>{
                return el.checked === false;
            }))
        }
        
    }

    return (
        <div className="container">
            <Header/>
            <Input NewComponent={NewComponent}/>
            <Todo lists={filter} completed={completed} deletTask={deletTask}/>
            <Filter filterTask={filterTask}/>

        </div>
    );
};

export default Container;