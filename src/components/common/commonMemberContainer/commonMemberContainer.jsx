import React from 'react'
import myprofile from '../../../assets/images/testUser.png'
import defaultUser from "../../../assets/images/default-user.png";
const CommonMemberContainer = ({userData}) => {
    return (
        <button className='bg-transparent border-0 d-flex justify-content-between align-items-center gap-2 w-100 common-member-container pt-2 pb-2'>
            <div className='d-flex gap-2 align-items-center'>
                <div className='text-center'>
                    <img src={userData?.profilePic || defaultUser} width={35} height={35} style={{ borderRadius: 90 }} />
                </div>
                <div className='d-flex flex-column justify-content-start align-items-start'>
                    <div>
                        <h6 className='m-0' style={{ color: "#121212" }}>{userData?.firstName} {userData?.lastName}</h6>
                    </div>
                    <div className='text-start'>
                        <p className='m-0 text-start' style={{ color: "#41475" }}>{userData?.email} | {userData?.contactNo}</p>
                    </div>
                </div>
            </div>

            {/* <div>
                <p className='m-0' style={{ color: "#41475" }}>1 Tasks</p>
            </div> */}
        </button>
    )
}

export default CommonMemberContainer
