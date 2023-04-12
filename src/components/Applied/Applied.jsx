import React, { useState } from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const Applied = () => {
    const job = useLoaderData()

    return (
        <div>
            
            <div className='text-center bg-slate-100 p-5 text-3xl font-bold text-violet-900'>
                <h1>Applied Job</h1>
            </div>
            <div >
                {
                    job.map(jb => <AppliedJob key={jb.id}
                        jb={jb}></AppliedJob>)
                }
           </div>
           
        </div>
    );
};

export default Applied;