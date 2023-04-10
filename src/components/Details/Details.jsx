import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Details = () => {
    const details = useLoaderData();
    
    return (
        <div>
    
            <div>
                {
                    details.map(detail => <Detail key={detail.id}
                    detail={detail}></Detail>)
                }
            </div>
        </div>
    );
};

export default Details;