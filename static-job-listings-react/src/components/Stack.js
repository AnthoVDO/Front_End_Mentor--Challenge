import React from 'react';

const Stack = ( {data, onClickBtn} ) => {


    return (
        <ul className="stack">
        
                
            <li className="stack-li" key={Math.floor(Math.random() * Math.floor(1000))} onClick={onClickBtn}>{data.role}</li> {/*role */ }
            <li className="stack-li" key={Math.floor(Math.random() * Math.floor(1000))} onClick={onClickBtn}>{data.level}</li> {/*level */}
            {/*languages */}
            {data.languages.map(e =>{ 
                const key = Math.floor(Math.random() * Math.floor(1000));
                return <li className="stack-li" key={key} onClick={onClickBtn}>{e}</li>})
                
                }
               {/*tool */} 
            {data.tools.map(e =>{ 
                const key = Math.floor(Math.random() * Math.floor(1000));
                return <li className="stack-li" key={key} onClick={onClickBtn}>{e}</li>})
                }
        </ul>
    );
};

export default Stack;