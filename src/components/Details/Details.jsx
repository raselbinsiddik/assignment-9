import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from '../Detail/Detail';

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            {
                details.map(detail => <Detail key={detail.id}
                    detail={detail}></Detail>)
            }
        </div>
    );
};

export default Details;