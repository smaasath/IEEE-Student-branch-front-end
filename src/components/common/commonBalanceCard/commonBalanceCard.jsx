import React from 'react'
import Ornament from '../../../assets/images/Ornament.png'
import income from '../../../assets/icons/income.png'
import expence from '../../../assets/icons/expence.png'
const CommonBalanceCard = (props) => {
    return (
        <div
            className={`common-shadow rounded-4 d-flex justify-content-between ${props.wallet ? 'bg-third' : 'bg-white'}`}
            style={{ width: 330 }}
        >
            <div className='p-3'>
                <div style={{ color: props.wallet ? "white" : "#718EBF" }}>
                    {props.text}
                </div>
                <div style={{ color: props.wallet ? "white" : "black" }}>
                    <h3>LKR {props.amount}</h3>
                </div>
            </div>
            <div className={`${props.wallet ? 'text-end' : 'd-flex justify-content-center align-items-center p-3'}`} style={{ flex: 1 }}>
                {props.wallet ? <img src={Ornament} className='w-75' /> : <div className='text-center'><img src={props.text == 'Income' ? income : expence} className='w-75' /></div>}
            </div>
        </div>
    )
}

export default CommonBalanceCard
