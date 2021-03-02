import React from 'react';

const Contract = ({data}) => {
    return (
        <ul className="contract">
            <li>{data.postedAt}</li>
            <li>{data.contract}</li>
            <li>{data.location}</li>
        </ul>
    );
};

export default Contract;