import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import CommonSearch from '../../common/commonSearch/commonSearch';
import { createRole, updateRole } from '../../../redux/actions/role';
import { assignPolicy, getAllPolicy } from '../../../redux/actions/policy';

const UserRoleModel = ({ onHide, show, editable, disabled, item, changed }) => {
  const [formData, setFormData] = useState({
    userRole: "",
    type: "",
  });

  const [error, setError] = useState({
    userRole: false,
    type: false,
  });

  const [policies, setPolicies] = useState(null)
  const [selectError, SetSelectError] = useState('')
  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState('');
  const [searchItem, setsearchItem] = useState('');

  const [selectedPolicy, setSelectedPolicy] = useState([]);

  function onSelectItem(data) {
    const index = selectedPolicy.findIndex((item) => item.policyID === data.policyID);
    if (index === -1) {
      setSelectedPolicy([...selectedPolicy, data]);
    } else {
      const updatedSelectedPolicy = [...selectedPolicy];
      updatedSelectedPolicy.splice(index, 1);
      setSelectedPolicy(updatedSelectedPolicy);
    }
  }

  function isSelected(policy) {
    return selectedPolicy.some((item) => item.policyID === policy.policyID);
  }

  function search(item) {
    setsearchItem(item?.target?.value)
    console.warn(item?.target?.value);
  }

  useEffect(() => {
    console.warn(item, "itemmm")

    getAllPolicy(0, searchItem, "", (res) => {
      if (res.status == 200) {
        setPolicies(res?.data?.data?.content)

      }

    })
  }, [searchItem])

  useEffect(() => {
    if (editable && show == true) {
      setSelectedPolicy(item.policies)
    }

  }, [show])

  useEffect(() => {

    if (!editable) {
      setFormData({
        userRole: "",
        type: "",
      });
    } else {
      setFormData(item)
    }

    setError({
      userRole: false,
      type: false,
    });
    SetSelectError('')
    setExist('')

  }, [show])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('')
    SetSelectError('')
  };


  function addRole() {
    const idArray = selectedPolicy.map(({ policyID }) => policyID);
    setExist('')
    setError({
      userRole: false,
      type: false,
    });

    if (!formData.userRole || formData.type == '') {
      setError({
        ...error,
        userRole: !formData.userRole,
        type: formData.type == '' ? true : false,
      });
      return;
    }

    if (selectedPolicy.length > 0) {
      setLoading(true)
      if (editable) {
        formData.roleID = item?.id;
        updateRole(formData, (res) => {
          console.log(res.data)
          if (res?.status == 200) {
            assignPolicy({
              roleId: res?.data?.data?.roleID,
              policies: idArray
            }, (res) => {
              if (res.status == 200) {
                console.warn(res)
                setLoading(false)
                changed()
                onHide()
              }

            })

          } else {
            setLoading(false)
            setExist("Role Edited Failed")
          }
        })
      } else {

        createRole(formData, (res) => {
          if (res?.status == 201) {
            console.warn()

            assignPolicy({
              roleId: res?.data?.data?.roleID,
              policies: idArray
            }, (res) => {
              if (res.status == 200) {
                console.warn(res)
                setLoading(false)
                changed()
                onHide()
              }

            })



          } else if (res?.status == 409) {
            setLoading(false)
            setExist("Role Already Exist")
          } else {
            setLoading(false)
            setExist("Role Added Failed")
          }


        })
      }

    } else {
      SetSelectError("Please Select a Policy")
    }

  }

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
                <input type="text" className={`form-control ${error.userRole ? "is-invalid" : ""}`} name='userRole' value={formData.userRole} onChange={handleInputChange} id="roleInput" placeholder="Role Name" disabled={disabled} />
                <div class="invalid-feedback">
                  This field is required.
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="typeSelect" className="form-label text-dark">Type</label>
              <select value={formData.type} name='type' onChange={handleInputChange} className={`form-select w-100 ${error.type ? "is-invalid" : ""}`} aria-label="Large select example" disabled={disabled}>
                <option value=''>Select Type</option>
                <option value="MAIN">Main</option>
                <option value="EXCOM">Excom</option>
                <option value="PROJECT">Project</option>
              </select>
              <div class="invalid-feedback">
                This field is required.
              </div>
            </div>

            <div className='mt-3'>
              <CommonSearch onChange={(item) => { search(item) }} />
              <div className="table-responsive mt-2 overflow-scroll" style={{ maxHeight: 300 }}>
                <table className="table table-bordered">
                  <thead className='sticky-top z-1'>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Policy</th>
                      <th scope="col">Policy Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {policies?.map((policy, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            checked={isSelected(policy)}
                            onChange={() => onSelectItem(policy)}
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
              <div className='text-danger text-center mt-4'>
                {selectError}
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
                <CommonButton load={loading} onClick={addRole} text={editable ? "Save" : "Add"} />
              </div>
            )
          }


        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserRoleModel;
