import React from 'react';

const Update = ({data}) => {



    return (
        <ul className="update">
            {data.new &&
                <li className='update-new'>NEW!</li>
            }
            {data.featured &&
                <li className='update-featured'>FEATURED</li>
            }
        </ul>
    );
};

export default Update;