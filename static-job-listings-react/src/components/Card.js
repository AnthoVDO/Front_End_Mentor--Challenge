import React from 'react';
import Contract from './Contract';
import Stack from './Stack';
import Update from './Update';

const Card = ({datas, onClickBtn}) => {






    return (
        <>
       { datas.map(data=>
        (
            
            <div /*className='card'  */
            key={Math.floor(Math.random() * Math.floor(1000))}
            className={data.featured ? "card-featured card" : "card"}
            >
            <div className="card-left">
            <img src={data.logo} alt={data.company+ "'s logo"}/> {/*Company's picture */}
            <div className="card-left-top">
                <h2>{data.company}</h2> {/*Company's name*/}
            <Update data={data} />
            </div>
            
            <h3>{data.position}</h3> {/*Company's job title */}
            <Contract data={data}/>
            </div>
            
            <Stack data={data} onClickBtn={onClickBtn}/>
        
            </div>)
       )}

       
        </>
    );
};

export default Card;