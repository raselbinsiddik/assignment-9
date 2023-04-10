import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Job = ({ job }) => {
    const { id, title, name, logo, Contact_information, location, salary } = job;
    return (
        <div className='m-5 border-2 rounded-md p-10'>
            <img className='w-52 '  src={logo} alt="" />
            <div>
                {title}
                {name}
                <button>Remote</button><button>full time</button>
                <span><MapPinIcon class="h-6 w-6 text-blue-300" />{location}</span> <span><CurrencyDollarIcon class="h-6 w-6 text-blue-300" />{salary}</span>
            </div>
        </div>
    );
};

export default Job;