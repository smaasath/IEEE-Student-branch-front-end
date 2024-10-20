import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const CommonPieChart = ({ todo=1, progress=1, complete=1 }) => {
    const [data, setData] = useState({
        options: {
            colors: ['#5F6A6A', '#00629B', '#229954'],
            labels: ['To Do', 'On Going', 'Completed'],
        },
        series: [todo, progress, complete],
    });

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            series: [todo, progress, complete],
        }));
    }, [todo, progress, complete]);

    return (
        <div className='d-flex bg-white rounded-2 common-shadow p-3'>
            <Chart options={data.options} series={data.series} type="donut" width="380" />
        </div>
    );
};

export default CommonPieChart;
