import React from 'react'
import search from '../../../assets/icons/search.png'


const CommonSearch = ({primary,onChange}) => {
    return (
        <div>
            <div className="input-group">
                <input onChange={(item)=>onChange(item)} type="search" className="form-control form-control-sm" placeholder="Search....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className={`input-group-append ps-3 pe-3 p-2 text-center rounded-end-3 ${primary ? "bag-primary" : "bg-third"}`}>
                    <img style={{ width: 15, height: 15 }} src={search} className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default CommonSearch
