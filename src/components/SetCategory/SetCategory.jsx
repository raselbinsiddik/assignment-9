import React from 'react';

const SetCategory = ({category}) => {
    const { logo, title, id, jobs } = category;
    
    return (
        <div className='border-2 m-5 bg-slate-100 rounded-md p-10 '>
            <img className='w-28 ms-5 bg-indigo-100 p-5 rounded-md' src={logo} alt="" />
            <div className='ms-5'>
                <h1 className='font-bold mb-2'>{title}</h1>
                <p>{jobs}</p>
            </div>
        </div>
    );
};

export default SetCategory;