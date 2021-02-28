import React from 'react';

const Contract = ({data}) => {
    return (
        <ul className="contract">
            <li>{data[0].postedAt}</li>
            <li>{data[0].contract}</li>
            <li>{data[0].location}</li>
        </ul>
    );
};

export default Contract;