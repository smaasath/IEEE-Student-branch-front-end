import React from 'react'
import { useParams } from 'react-router-dom';
import projectDefault from '../../../assets/images/projectDefault.png'
import CommonPieChart from '../../../components/common/commonPieChart/commonPieChart';
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard';


const ProjectPage = () => {
    const params = useParams();
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
        </div>
    )
}

export default ProjectPage
