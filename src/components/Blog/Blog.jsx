import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-300  m-20 font-bold p-3 rounded'>
            <h1 className='text-xl'>Question1: When should you use context API?</h1>
            <p className='bg-slate-100 rounded'>Answer1: In general, you should use the Context API when you have data that needs to be accessed by multiple components and passing that data down through props would be too cumbersome.</p>
            <h1 className='text-xl'>Question2: What is a custom hook?</h1>
            <p className='bg-slate-100 rounded'>Answer2:</p>
            <h1 className='text-xl'>Question3: What is useRef?</h1>
            <p className='bg-slate-100 rounded'>Answer3: </p>
            <h1 className='text-xl'>Question4: What is useMemo?</h1>
            <p className='bg-slate-100 rounded'>Answer4: </p>
        </div>
    );
};

export default Blog;