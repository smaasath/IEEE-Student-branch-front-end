import React, { useEffect, useState } from 'react'



const CommonPriorityContainer = ({ priority }) => {

    function getData(priority) {
        switch (priority) {
            case 'HIGH':
                return { bgcolor: '#FDF2F2', color: '#EC5962', };
            case 'MEDIUM':
                return { bgcolor: '#e6f0f5', color: '#00629B', };
            case 'NORMAL':
                return { bgcolor: '#f0f8ef', color: '#60B158', };
            default:
                return { bgcolor: '#FFFFFF', color: '#000000', };
        }
    }

    const [data, setData] = useState({ bgcolor: '', color: '' });

    useEffect(() => {
        setData(getData(priority));
    }, [priority]);



    return (
        <div style={{ backgroundColor: data.bgcolor, color: data.color, height: 24 }} className='p-1 ps-2 pe-2 rounded-1 text-center d-flex justify-content-center align-items-center' >
            <div><p className='m-0'>{priority}</p></div>
        </div>
    )
}

export default CommonPriorityContainer
