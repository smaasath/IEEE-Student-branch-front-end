import React, { useEffect, useState } from 'react'
import completeCount from '../../../assets/images/completeCount.png'
import onGoingCount from '../../../assets/images/onGoing.png'
import toDoCount from '../../../assets/images/toDo.png'

const CommonStatusCountCard = ({ type, count }) => {

    const [data, setData] = useState({ color: '', text: '', image: '' });

    useEffect(() => {
        setData(getStatus(type));
    }, [type]);

    function getStatus() {
        switch (type) {
            case "COMPLETE":
                return { color: "#229954", text: "Completed", image: completeCount };
            case "TODO":
                return { color: "#5F6A6A", text: "To Do", image: toDoCount };
            case "ONGOING":
                return { color: "#00629B", text: "Ongoing", image: onGoingCount };
            default:
                break;
        }
    }


    return (
        <div className='d-flex p-3 flex-column gap-2 bg-white rounded-4 common-shadow common-transition'>
            <div><h4 className='fw-bold' style={{ color: data.color }}>{data.text}</h4></div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <img src={data.image} width={85} />
                </div>
                <div className='bg-body-secondary p-3 rounded-circle d-flex justify-content-center align-items-center' style={{ maxWidth: 180, width: "100%", aspectRatio: 1 / 1, margin: "autto" }}>
                    <h2 className='m-0 fw-bolder'>{count}</h2>
                </div>
            </div>
        </div>
    )
}

export default CommonStatusCountCard
