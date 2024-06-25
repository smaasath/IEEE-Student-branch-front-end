import React from 'react'
import { useParams } from 'react-router-dom';
import projectDefault from '../../../assets/images/projectDefault.png'
import CommonPieChart from '../../../components/common/commonPieChart/commonPieChart';
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard';
import CommonButton from '../../../components/common/commonButton/commonButton';
import { useNavigate } from 'react-router-dom'
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonDropAndDrag from '../../../components/common/commonDropAndDrag/commonDropAndDrag';
import add from '../../../assets/icons/Add.png';
import send from '../../../assets/icons/Sent.png';
import CommonNoteContainer from '../../../components/common/commonNoteContainer/commonNoteContainer';
import CommonMemberContainer from '../../../components/common/commonMemberContainer/commonMemberContainer';


const ProjectPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    function navigateToFinance() {
        navigate('finance');
    }
    return (
        <div className='p-3'>
            <div className='d-flex justify-content-end gap-4 align-items-center flex-wrap'>
                    <div className=''><CommonButton onClick={() => { }} text={"Design Tasks"} /></div>
                    <div className=''><CommonButton onClick={() => { navigateToFinance() }} text={"Excom Details"} /></div>
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
            </div>

            <div className='d-flex flex-column bg-white common-shadow rounded-3 p-3 mt-4'>
                <div className='d-flex justify-content-between align-items-center w-100 flex-wrap gap-4'>
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
                <div className='mt-4 d-flex justify-content-between overflow-scroll overflow-y-hidden custom-scrollbar' style={{ maxWidth: 1300 }}>
                    <CommonDropAndDrag />
                </div>
            </div>
            <div className='d-flex mt-5 justify-content-between align-items-center flex-wrap gap-4'>
                <div className='text-cl-primary mt-4'>Upcomming Birthday</div>
            </div>

        </div>
    )
}

export default ProjectPage
