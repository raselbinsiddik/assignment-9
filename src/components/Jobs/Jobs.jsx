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
        <div>
            <h1>Featured Jobs</h1>
            <div>
                {
                    jobs.map(job => <Job
                        key={job.id}
                        job={job}></Job>)
                
             }
            </div>
            
        </div>
    );
};

export default Jobs;