import React from 'react';

const Stack = ( {data} ) => {


    return (
        <ul className="stack">
            {data[0].languages.map(e =>{ 
                const key = Math.floor(Math.random() * Math.floor(1000));
                return <li className="stack-li" key={key}>{e}</li>})}
                {data[0].tools.map(e =>{ 
                const key = Math.floor(Math.random() * Math.floor(1000));
                return <li className="stack-li" key={key}>{e}</li>})}
        </ul>
    );
};

export default Stack;