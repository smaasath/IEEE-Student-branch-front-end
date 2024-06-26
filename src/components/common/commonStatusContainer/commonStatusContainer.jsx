import React, { useEffect, useState } from 'react';

const CommonStatusContainer = ({ status }) => {
    function getData(status) {
        switch (status) {
            case 'TODO':
                return { bgcolor: '#E9ECEF', color: '#5F6A6A', text: 'To Do' };
            case 'RECIEVED':
                return { bgcolor: '#D1EB32', color: '#667085', text: 'Recieved' };
            default:
                return { bgcolor: '#FFFFFF', color: '#000000', text: 'Unknown' };
        }
    }

    const [data, setData] = useState({ bgcolor: '', color: '', text: '' });

    useEffect(() => {
        setData(getData(status));
    }, [status]);

    return (
        <div className='rounded-4 p-1 text-center ps-2 pe-2 fw-bold' style={{ color: data.color, backgroundColor: data.bgcolor, fontSize: 14 }}>
            {data.text}
        </div>
    );
};

export default CommonStatusContainer;
