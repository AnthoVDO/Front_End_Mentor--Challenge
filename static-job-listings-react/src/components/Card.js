import React from 'react';
import Contract from './Contract';
import Stack from './Stack';
import Update from './Update';

const Card = () => {

    const data = [{
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      }]

    return (
        <div className='card'>
        <div className="card-left">
            <img src={data[0].logo} alt={data[0].company+ "'s logo"}/> {/*Company's picture */}
            <div className="card-left-top">
                <h2>{data[0].company}</h2> {/*Company's name*/}
            <Update data={data} />
            </div>
            
            <h3>{data[0].position}</h3> {/*Company's job title */}
            <Contract data={data}/>
        </div>
            
            <Stack data={data}/>
        </div>
    );
};

export default Card;