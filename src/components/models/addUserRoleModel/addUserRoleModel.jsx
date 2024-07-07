import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import CommonSearch from '../../common/commonSearch/commonSearch';

const UserRoleModel = ({ onHide, show, editable, disabled, id }) => {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const policies = [
    {
      policy: 'Policy 1',
      policyCode: 'P001',
    },
    {
      policy: 'Policy 2',
      policyCode: 'P002',
    },
    {
      policy: 'Policy 3',
      policyCode: 'P003',
    },
  ];

  const handleSelectPolicy = (policyCode) => {
    if (selectedMembers.includes(policyCode)) {
      setSelectedMembers(selectedMembers.filter((code) => code !== policyCode));
    } else {
      setSelectedMembers([...selectedMembers, policyCode]);
    }
  };

  const handleSubmit = () => {
    onHide();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={true}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
            {editable ? "Edit" : disabled ? "View" : "Add"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column'>
            <div className='mt-3'>
              <div className="">
                <label htmlFor="roleInput" className="form-label text-dark">Role Name</label>
                <input type="text" className="form-control" id="roleInput" placeholder="Role Name" disabled={disabled} />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="typeSelect" className="form-label text-dark">Type</label>
              <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                <option>Select Type</option>
                <option value="1">pl</option>
              </select>
            </div>

            <div className='mt-3'>
              <CommonSearch />
              <div className="table-responsive mt-2">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Policy</th>
                      <th scope="col">Policy Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policies.map((policy, index) => (
                      <tr key={index}>
                        <td>
                          <input 
                            type="checkbox" 
                            checked={selectedMembers.includes(policy.policyCode)} 
                            onChange={() => handleSelectPolicy(policy.policyCode)} 
                            disabled={disabled} 
                          />
                        </td>
                        <td>{policy.policy}</td>
                        <td>{policy.policyCode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    {
                        disabled ? null : (
                            <div>
                                <CommonButton onClick={onHide} text={editable ? "Save" : "Add"} />
                            </div>
                        )
                    }


                </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserRoleModel;
