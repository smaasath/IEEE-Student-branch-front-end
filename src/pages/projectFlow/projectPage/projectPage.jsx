import React from 'react'
import { useParams } from 'react-router-dom';
import projectDefault from '../../../assets/images/projectDefault.png'
import CommonPieChart from '../../../components/common/commonPieChart/commonPieChart';
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard';
import CommonButton from '../../../components/common/commonButton/commonButton';
import { useNavigate } from 'react-router-dom'
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonDropAndDrag from '../../../components/common/commonDropAndDrag/commonDropAndDrag';



const ProjectPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    function navigateToFinance() {
        navigate('finance');
    }
    return (
        <div className='p-3'>
            <div className='bg-white rounded-3 common-shadow p-3 row align-items-center'>
                <div className='col-md-3 d-flex justify-content-center'>
                    <img src={projectDefault} width={150} className='img-fluid' />
                </div>
                <div className='col-md-9 d-flex flex-column'>
                    <div>
                        <h2>Project Title</h2>
                    </div>
                    <div>
                        <p className='text-secondary text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id dignissim ex. In sem sem, efficitur vel varius lobortis, pretium a velit. Donec quis ligula quis sem dignissim bibendum. Fusce a quam in mauris feugiat rutrum. Integer sodales dui laoreet lectus eleifend dignissim. In sed metus sem. Integer nibh enim, ultricies vel eleifend eu, mattis a metus. Aenean tristique diam eleifend diam vestibulum, nec dapibus ipsum tempus.</p>
                    </div>

                </div>
            </div>

            <div className='text-cl-primary mt-4'>Tasks</div>
            <div className='d-flex mt-3 justify-content-between align-items-center gap-4 flex-wrap'>
                <div>
                    <CommonPieChart />
                </div>
                <div className='d-flex justify-content-between flex-wrap flex-grow-1 gap-4'>
                    <div>
                        <CommonStatusCountCard type={"TODO"} count={44} />
                    </div>
                    <div>
                        <CommonStatusCountCard type={"ONGOING"} count={55} />
                    </div>
                    <div>
                        <CommonStatusCountCard type={"COMPLETE"} count={41} />
                    </div>
                </div>
            </div>

            <div className='d-flex mt-5 justify-content-between align-items-center flex-wrap gap-4'>
                <div className='text-cl-primary mt-4'>Board</div>
                <div className='d-flex justify-content-end gap-4 align-items-center flex-wrap'>
                    <div className=''><CommonButton onClick={() => { }} text={"PR Plan"} /></div>
                    <div className=''><CommonButton onClick={() => { navigateToFinance() }} text={"Finance"} /></div>
                    <div className=''><CommonButton onClick={() => { }} text={"Events"} /></div>
                </div>
            </div>

            <div className='d-flex flex-column bg-white common-shadow rounded-3 p-3 mt-4'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div>
                        <CommonSearch />
                    </div>
                    <div className="">
                        <select className="form-select w-100" aria-label="Large select example">
                            <option selected>Assignee</option>
                            <option value="1">Me</option>
                        </select>
                    </div>
                </div>
                <div className='mt-4'>
                    <CommonDropAndDrag />
                </div>
            </div>

        </div>
    )
}

export default ProjectPage
