import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CalculatorIcon, CurrencyDollarIcon, InboxStackIcon, MapPinIcon, PhoneIcon, } from '@heroicons/react/24/solid';
import { addToDb } from '../../utilities/localdb';

const View = () => {
    const view = useLoaderData();
    const { aId } = useParams();
    //console.log(view)

     const [viewDetails, setViewDetails] = useState({})

     const [job, setJob] = useState({})

    useEffect(() => {
        const findJob = view.find(d => d.id == aId)
        setViewDetails(findJob)
       
    }, [])
    const handleAddToJob = findJob => {
        const newJob = [job, findJob]
        setJob(newJob)
        addToDb(viewDetails.id)
    }
    const {
        contact_email, contact_phone, educational_requirements, experiences, job_responsibility, job_description, job_title, salary, location, id } = viewDetails;
    return (
        <div>
            <div>
                <div className='text-center bg-slate-100 p-5 text-3xl font-bold text-violet-900'>
                    <h1>Job Details</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 m-16 text-xl'>
                    <div className='m-5 '>
                        <p className='p-2'><span className='font-bold'>Job Description:</span>  {job_description}</p>
                        <p className='p-2'><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</p>
                        <p className='p-2'><span className='font-bold'>Educational Requirements:</span> {educational_requirements}</p>
                        <p className='p-2'><span className='font-bold'>Experiences:</span> {experiences}</p>
                    </div>
                    <div className='mt-5'>
                        <div className='m-5 bg-indigo-50 p-4 rounded '>
                            <h1 className='font-bold text-2xl mb-6'>Job Details</h1>
                            <hr className='border-2' />
                            <p className='mt-8 flex mb-3'><CurrencyDollarIcon className='h-6 w-6 text-blue-300' />
                                <span className='font-bold flex '> Salary:</span>
                                {salary} (per month)</p>
                            <p className='flex'><CalculatorIcon className='h-6 w-6 text-blue-300' /><span className='font-bold'>Job title:</span> {job_title}</p>
                            <h1 className='font-bold mt-8 mb-3'>Contact Information</h1>
                            <hr className='border' />
                            <p className='flex mt-8'><PhoneIcon className='h-6 w-6 text-blue-300' /><span className='font-bold'>Phone: </span>{contact_phone}</p>
                            <p className='flex mt-3'><InboxStackIcon className='h-6 w-6 text-blue-300' /><span className='font-bold'>Email: </span>{contact_email}</p>
                            <p className='flex mt-3 mb-8'><MapPinIcon className='h-6 w-6 text-blue-300' /><span className='font-bold'>Address: </span>{location}</p>

                        </div>
                        <button onClick={() => handleAddToJob(viewDetails)} className='bg-indigo-500 text-2xl text-white p-4  w-full rounded-lg  font-bold'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;