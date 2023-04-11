import React from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid,Tooltip, Legend,Scatter, BarChart
} from "recharts";


const Statics = () => {
    const data = [
        {
            name: "first",
            full: 60,
            result: 46
        },
        {
            name: "second",
            full: 60,
            result: 57
        },
        {
            name: "third",
            full: 60,
            result: 55
        },
        {
            name: "four",
            full: 60,
            result: 60
        },
        {
            name: "five",
            full: 60,
            result: 52
        },
        {
            name: "six",
            full: 60,
            result: 43

        },
        {
            name: "seven",
            full: 60,
            result: 60

        }
    ];
    return (
        <div>
            <div className='text-center bg-slate-100 font-bold text-3xl p-5 text-violet-900'>
                View Statics
            </div>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="full" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="result" fill="red" />
            </ComposedChart>
           
        </div>
    );
};

export default Statics;