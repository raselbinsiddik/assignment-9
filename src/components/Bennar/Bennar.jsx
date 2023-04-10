import React from 'react';
import men from '../../images/men.png'

const Bennar = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-5'>
            <div className='mt-15'>
                <h1 className='font-bold text-left text-8xl mb-8'>One Step Closer To Your <span className='text-indigo-500 mr-30'>Dreame Job</span></h1>
                <p>Explore thousends of jobs opportunity in our country.everybody needs to agood job. and need more money for arich men.if you wants to create your career beautiful you will try hard to explore.</p>
                <button className='bg-indigo-600 mt-8 text-white rounded-md p-4'>Get Started</button>
            </div>
            <div>
                <img src={men} alt="" />
            </div>
        </div>
    );
};

export default Bennar;