import React from 'react';
import Card from './Card';
import Datas from "../data.json";
import {useState} from  'react';

const Container = () => {

    const[onFilter, setOnFilter] = useState([]);
    /*const[word, setWord] = useState([]);*/

    const onClickBtn = (e) => {

        let ok = onFilter.indexOf(<span className="filtered">{e.target.innerText}</span>);
        const update = [...onFilter, <span className="filtered">{e.target.innerText}</span>];

        if(ok===-1){
            setOnFilter(update)
        }
        
        
            }
            
            
        
        
    



    return (
        
        <div className="container">
        <div className="filter">
        {onFilter.map(e=> e)}
            <button className="clear">
            
            Clear
            </button>
        </div>
            <Card datas={Datas} onClickBtn={onClickBtn}/>
        </div>
    );
};

export default Container;