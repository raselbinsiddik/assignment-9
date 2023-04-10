import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, job_title, company_name, logo,  location, salary } = job;
    return (
        <div className='m-5 border-2 rounded-md p-10'>
            <img className='w-52 '  src={logo} alt="" />
            <div className='mt-5'>
                <span className='font-bold text-2xl'> {job_title}</span>
                <br/>
                <span className='text-2xl'>{company_name}</span>
                <div className='mt-4'>
                    <button className=' border text-violet-600 p-2 rounded-md font-bold'>Remote</button>
                    <button className=' border text-violet-600 p-2 rounded-md font-bold ms-3'>full time</button>
                </div>
                <div className='flex mt-5'>
                    <span className='flex' ><MapPinIcon class="h-6 w-6 text-blue-300" />{location}</span>
                    <span className='flex ms-4'><CurrencyDollarIcon class="h-6 w-6 text-blue-300" />Salary:{salary}</span>
               </div>
            </div>
            <Link to={`/details/${details.id}`}><button className='bg-indigo-600 text-white p-5 rounded-lg mt-5 font-bold text-xl'>View Details</button>
            </Link>
        </div>
    );
};

export default Job;