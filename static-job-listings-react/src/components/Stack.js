import React from 'react';

const Stack = ( {data} ) => {


    return (
        <ul>
            {data[0].languages.map(e =>{ 
                const key = Math.floor(Math.random() * Math.floor(1000));
                return <li key={key}>{e}</li>})}
        </ul>
    );
};

export default Stack;