import React from 'react';
import Card from './Card';
import Datas from "../data.json";
import {useState} from  'react';
import { BsFillBackspaceFill } from "react-icons/bs";

const Container = () => {

    const[onFilter, setOnFilter] = useState([]);
    const[dataFiltered, setDataFiltered] = useState([...Datas]);

    //adding the filter

    const onClickBtn = (e) => {

        let tempData = dataFiltered.filter(
            function(el){
                return (
                e.target.innerText === el.role || 
                e.target.innerText === el.level||
                el.languages.indexOf(e.target.innerText)>-1||
                el.tools.indexOf(e.target.innerText)>-1
                )
            }
        )

        

        //Add filter text in the filter bar
        let ok = onFilter.indexOf(e.target.innerText);
        
        if(ok===-1){
            return [setOnFilter([...onFilter, e.target.innerText]), setDataFiltered(tempData)];
        }
        else{
            return null
        }}
            
    // Removing all the filter
    
    const clearAll = ()=>{
        setOnFilter([]);
        setDataFiltered([...Datas]);
    }

    //Removing one by one
  const clearOne = (e)=>{
      //console.log(e.currentTarget.parentNode.innerText);
//remove from the filter list
      const tempFilter = [...onFilter];
      const indexToRemove = tempFilter.indexOf(e.currentTarget.parentNode.innerText);
      //console.log(indexToRemove);
      tempFilter.splice(indexToRemove,1);

//remove the filter applied
        let removeAppliedFilter = [...Datas];
        tempFilter.forEach(element=>{
            removeAppliedFilter = removeAppliedFilter.filter(
                function(el){
                    return (
                    element === el.role || 
                    element === el.level||
                    el.languages.indexOf(element)>-1||
                    el.tools.indexOf(element)>-1
                    )
                }
        )
    })


      return [setOnFilter([...tempFilter]), setDataFiltered([...removeAppliedFilter])];
  }
            
    return (
        <div className={onFilter.length>0?"container container__more-space" :"container"}>
        {onFilter.length>0 && 
        <div className="filter">
        {onFilter.map(e=>{
             
                return(
                    <span key={Math.floor(Math.random() * Math.floor(10000000))} className="filtered">{e}
                    <><BsFillBackspaceFill className="clearOne" onClick={clearOne}/>
                    </></span>
                    
    
                )
                }
                
             )}
            <button className="clear" onClick={clearAll}>
            
            Clear
            </button>
        </div>
        }
        

            <Card datas={dataFiltered} onClickBtn={onClickBtn}/>
        </div>
    );
};

export default Container;