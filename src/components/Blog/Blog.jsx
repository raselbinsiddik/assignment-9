import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-300  m-20 font-bold p-3 rounded'>
            <h1 className='text-xl'>Question1: When should you use context API?</h1>
            <p className='bg-slate-100 rounded'>Answer1: In general, you should use the Context API when you have data that needs to be accessed by multiple components and passing that data down through props would be too cumbersome.</p>
            <h1 className='text-xl'>Question2: What is a custom hook?</h1>
            <p className='bg-slate-100 rounded'>Answer2: Custom hooks are created by calling built-in hooks like useState, useEffect, useReducer, and others within a function, and then returning any state, helper functions, or other values that are necessary for the component to use.</p>
            <h1 className='text-xl'>Question3: What is useRef?</h1>
            <p className='bg-slate-100 rounded'>Answer3: useRef is comonly used to access the properties or methods of a DOM element, but it can also be used to store any mutable value that needs to persist between renders.</p>
            <h1 className='text-xl'>Question4: What is useMemo?</h1>
            <p className='bg-slate-100 rounded'>Answer4: Memoization is a technique where the results of a function call are caced based on the input to the function, so that if the same inputs are provided again, the cached results can be returned instead of re-calculating the result.</p>
        </div>
    );
};

export default Blog;