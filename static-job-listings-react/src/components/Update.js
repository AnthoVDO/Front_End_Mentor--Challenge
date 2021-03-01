import React from 'react';

const Update = ({data}) => {



    return (
        <ul className="update">
            {data[0].new &&
                <li className='update-new'>NEW!</li>
            }
            {data[0].featured &&
                <li className='update-featured'>FEATURED</li>
            }
        </ul>
    );
};

export default Update;