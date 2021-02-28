import React from 'react';

const Update = ({data}) => {



    return (
        <ul className="update">
            {data[0].new &&
                <li>NEW!</li>
            }
            {data[0].featured &&
                <li>FEATURED</li>
            }
        </ul>
    );
};

export default Update;