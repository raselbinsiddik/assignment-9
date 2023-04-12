import React from 'react';
import {id, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const AppliedJob = ({ jb }) => {
    const { logo, job_title, location, salary, company_name } = jb;
    return (
        <div>
           
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
                <Link to={`/view/${id}`}>
                    <button className="btn btn-primary mt-20 mr-5 font-bold">View Details</button></Link>
            </div> 
        </div>
    );
};

export default AppliedJob;