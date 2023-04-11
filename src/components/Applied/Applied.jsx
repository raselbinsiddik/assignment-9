import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const job = useLoaderData()
    const [{ logo, job_title, company_name, location, salary }] = job;
    console.log(job);
    return (
        <div>
            <div className='text-center bg-slate-100 p-5 text-3xl font-bold text-violet-900'>
                <h1>Applied Job</h1>
            </div>
            {/* <h1>{job.length }</h1> */}
            <div>
                <img src={logo} alt="" />
                <div>
                    <p>{job_title}</p>
                    <p> {company_name}</p>
                    <button>Remote</button><button>Fulltime</button>
                    <p>{location}</p>
                    <p>Salary: {salary}</p>
                </div>
                <button>View Details</button>
            </div>
           
        </div>
    );
};

export default Applied;