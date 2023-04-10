import React from 'react';

const Detail = ({ detail }) => {
    const { Contact_information, Educational_Requirements, Experiences, job_description, job_title, salary, Job_Responsibility, id, location } = detail;
    console.log(detail)
    return (
        <div>
            <div>
                <p>Job Description: {job_description}</p>
                <p>Job Responsive: {}</p>
                <p>Educational Requirements: {Educational_Requirements} </p>
                <p>Experiences: {Experiences}</p>
            </div>
        </div>
    );
};

export default Detail;