import React from 'react';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';
import profile from '../../../assets/images/profile.png';
import CommonButton from '../../../components/common/commonButton/commonButton';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ photo, name, role }) => {
    return (
        <div className='card' style={{ borderRadius: '10px', padding: '20px', position: 'relative', width: "450px" }}>
            <div className='card-body d-flex'>
                <img
                    src={photo || profile}
                    alt='Profile'
                    className='img-thumbnail me-3 rounded-circle'
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{role}</p>
                    <div className='d-flex gap-2'>
                        <img src={Facebook} alt='Facebook' />
                        <img src={Linkedin} alt='LinkedIn' />
                    </div>
                </div>
            </div>
        </div>
    );
};

const MainSettingPage = () => {
    const navigate = useNavigate();

    const navigateToProfileEditPage = () => {
        navigate('edit-profile');
    };

    const userProfile = [
        {
            photo: profile,
            name: 'Thilini Priyangika',
            role: 'Web Master',
        },
    ];

    return (
        <div className='container'>
            <div className='text-cl-primary mt-1 px-5'>User Profile</div>

            <div className='d-flex justify-content-between align-items-center flex-wrap px-5'>
                <div className='row mt-4'>
                    {userProfile.map((user, index) => (
                        <div className='col-6 col-md-6 mb-4' key={index}>
                            <ProfileCard
                                photo={user.photo}
                                name={user.name}
                                role={user.role}
                            />
                        </div>
                    ))}
                </div>
                <div style={{ marginRight: '380px' }}>
                    <CommonButton text={"Edit Profile"} onClick={navigateToProfileEditPage} />
                </div>
            </div>

            <div className='d-flex flex-column px-5'>
                <div className="mt-3">
                    <label htmlFor="bio" className="form-label text-dark">Bio</label>
                    <input type="text" className="form-control" placeholder="Don't worry, be happy" disabled style={{ width: "520px" }} />
                </div>

                <div className="mt-3 d-flex flex-wrap gap-lg-3">
                    <div className="">
                        <label htmlFor="firstName" className="form-label text-dark">First Name</label>
                        <input type="text" className="form-control" placeholder="Suvini" disabled style={{ width: "520px" }} />
                    </div>
                    <div className="">
                        <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
                        <input type="text" className="form-control" placeholder="Herath" disabled style={{ width: "520px" }} />
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="userName" className="form-label text-dark">User Name</label>
                    <input type="text" className="form-control" placeholder="suviniherath" disabled style={{ width: "520px" }} />
                </div>

                <div className="mt-3 d-flex flex-wrap gap-lg-3">
                    <div className="">
                        <label htmlFor="email" className="form-label text-dark">Email Address</label>
                        <input type="email" className="form-control" placeholder="suvi@gmail.com" disabled style={{ width: "520px" }} />
                    </div>
                    <div className="">
                        <label htmlFor="phone" className="form-label text-dark">Phone Number</label>
                        <input type="text" className="form-control" placeholder="0712458963" disabled style={{ width: "520px" }} />
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="ieeeEmail" className="form-label text-dark">IEEE Email Address</label>
                    <input type="email" className="form-control" placeholder="ieeesuvi@gmail.com" disabled style={{ width: "520px" }} />
                </div>

                <div className="mt-3">
                    <label htmlFor="ieeeNumber" className="form-label text-dark">IEEE Membership Number</label>
                    <input type="text" className="form-control" placeholder="ieee23" disabled style={{ width: "520px" }} />
                </div>

                <div className="mt-3">
                    <label htmlFor="location" className="form-label text-dark">Location</label>
                    <input type="text" className="form-control" placeholder="Monaragala" disabled style={{ width: "520px" }} />
                </div>
            </div>
        </div>
    );
};

export default MainSettingPage;
