import React, { useEffect, useState } from 'react';
import SetCategory from '../SetCategory/SetCategory';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    },[])
    
    return (
        <div className=' mt-5'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl mb-5'>Job Category List</h1>
                <p>Explore thousands of job oppurtunity with all the information you need. Its your future </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-5'>
                {
                    categorys.map(category => <SetCategory key={category.id}category={category}>  
                    </SetCategory>)
                }
            </div>
        </div>
    );
};

export default Category;