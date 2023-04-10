import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('./jobsData.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    },[])
    return (
        <div className=''>
            <h1 className='font-bold text-5xl text-center m-5 mt-10'>Featured Jobs</h1>
            <p className='text-center '>Explore thousands of job oppurtunity with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 m-5'>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}></Job>)
                
             }
            </div>
            <div className='text-center'>
                <button className='bg-indigo-600 text-white p-5 rounded-lg mt-5 font-bold text-xl'>See All Jobs</button>
          </div>
            
        </div>
    );
};

export default Jobs;