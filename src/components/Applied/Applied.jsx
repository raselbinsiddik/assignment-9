import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import {  CurrencyDollarIcon,  MapPinIcon } from '@heroicons/react/24/solid';

const Applied = () => {
    const job = useLoaderData()
    const navigate = useNavigate(job)
    const [{ id, logo, job_title, company_name, location, salary }] = job;
    const returnApplyHandler = () => {
      
    }

    return (
        <div>
            <div className='text-center bg-slate-100 p-5 text-3xl font-bold text-violet-900'>
                <h1>Applied Job</h1>
            </div>
            {/* <h1>{job.length }</h1> */}
            <div className='flex border m-20 justify-between '>
                <div className='flex'>
                    <img className='h-40 w-40 m-5 bg-slate-200 p-3' src={logo} alt="" />
                    <div className='m-5'>
                        <p className='font-bold text-xl'>{job_title}</p>
                        <p className='text-xl font-bold text-slate-400 mt-1'> {company_name}</p>
                        <button className='border-2 text-violet-500'>Remote</button><button className='border-2 ms-2 text-violet-500'>Fulltime</button>
                        <p className='mt-3 flex'><MapPinIcon className='h-6 w-6 text-blue-300' /> {location}</p>
                        <p className='flex'><CurrencyDollarIcon className='h-6 w-6 text-blue-300' />Salary: {salary}</p>
                    </div>
               </div>
                <button onClick={ returnApplyHandler} className="btn btn-primary mt-20 mr-5 font-bold">View Details</button>
            </div>
           
        </div>
    );
};

export default Applied;