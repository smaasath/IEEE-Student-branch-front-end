import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import CommonSearchModel from '../commonSearchModel/commonSearchModel';


const AddTransectionModel = ({ onHide, show, setTransectionModelShow, disabled, editable, id }) => {

    const [method, setMethod] = useState("Bank")

    const methods = ["Bank", "Inside", "Budget"]

    const [walletModelShow, setWalletModelShow] = useState(false);
    const [proposalModelShow, setProposalModelShow] = useState(false);

    useEffect(() => {
        editable || disabled ? setMethod("Budget") : setMethod("Bank")
        console.warn(method)
    }, [show])

    const handleCloseWalletModelShow = () => {
        setTransectionModelShow(true)
        setWalletModelShow(false)
    }
    const handleCloseProposalModelShow = () => {
        setTransectionModelShow(true)
        setProposalModelShow(false)
    }
    const handleShowWalletModelShow = () => { setWalletModelShow(true); }
    const handleShowProposalModelShow = () => { setProposalModelShow(true); }

    const tableHeading = ["name", "amount", "type"]
    const tableData = [
        {
            id: "1",
            name: "CS chapter",
            amount: "500.00",
            type: "CHAPTER"
        },
        {
            id: "1",
            name: "CS chapter",
            amount: "500.00",
            type: "CHAPTER"
        },
        {
            id: "1",
            name: "CS chapter",
            amount: "500.00",
            type: "CHAPTER"
        },
        {
            id: "1",
            name: "CS chapter",
            amount: "500.00",
            type: "CHAPTER"
        },
        {
            id: "1",
            name: "CS chapter",
            amount: "500.00",
            type: "CHAPTER"
        }
    ]

    return (
        <>
            <Modal
                show={show} onHide={onHide} animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
                        Add Transaction
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        {editable || disabled ? <h3>{id}</h3> : (
                            <div className="btn-group" role="group" aria-label="Basic example">
                                {methods.map((item, index) => {
                                    return (
                                        <button onClick={() => { setMethod(item) }} key={index} type="button" className={`btn ${item == method ? "bag-primary text-white" : "text-dark"}`}>{item}</button>
                                    )

                                })}
                            </div>
                        )}

                        <div className="mt-5">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Account</label>
                            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                                <option selected>Select Account</option>
                                <option value="1">1212 1212 1212 1212</option>
                                <option value="2">1212 1212 1212 1212</option>
                                <option value="3">1212 1212 1212 1212</option>
                            </select>
                        </div>

                        <div className="mt-3">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Type</label>
                            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                                <option selected>Select Type</option>
                                <option value="1">Credit</option>
                                <option value="2">Debit</option>
                            </select>
                        </div>

                        {disabled ? (
                            <div className="mt-3">
                                <label for="exampleFormControlInput1" className="form-label text-dark">From Wallet</label>
                                <select className="form-select w-100" disabled={disabled} aria-label="Large select example">
                                    <option selected>Select Wallet</option>
                                </select>
                            </div>
                        ) : null}


                        {method == "Budget" || method == "Inside" ? (
                            <div className="mt-3">
                                <label for="exampleFormControlInput1" className="form-label text-dark">To Wallet</label>
                                <select className="form-select w-100" disabled={disabled} onClick={() => {
                                    setTransectionModelShow(false)
                                    handleShowWalletModelShow()
                                }} aria-label="Large select example">
                                    <option selected>Select Wallet</option>
                                </select>
                            </div>
                        ) : null}


                        {method == "Budget" ? (
                            <div className="mt-3">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Budget proposal</label>
                                <select className="form-select w-100" disabled={disabled} onClick={() => {
                                    setTransectionModelShow(false)
                                    handleShowProposalModelShow()
                                }} aria-label="Large select example">
                                    <option selected>Select Proposal</option>
                                </select>
                            </div>
                        ) : null}


                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Amount</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="amount" disabled={disabled} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" disabled={disabled}></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    <div>
                        <CommonButton onClick={onHide} text={"Add"} />
                    </div>

                </Modal.Footer>
            </Modal>

            <CommonSearchModel onClick={(id) => { console.warn(id) }} show={walletModelShow} onHide={handleCloseWalletModelShow} title={"Select a Wallet"} tableData={tableData} tableHeading={tableHeading}>
                <div className="">
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>select type</option>
                        <option value="1">Chapter</option>
                        <option value="2">Project</option>
                    </select>
                </div>

            </CommonSearchModel>
            <CommonSearchModel show={proposalModelShow} onHide={handleCloseProposalModelShow} title={"Select a Budget Proposal"} tableData={tableData} tableHeading={tableHeading}>
                <div className="">
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>select type</option>
                        <option value="1">Chapter</option>
                        <option value="2">Project</option>
                    </select>
                </div>
            </CommonSearchModel>
        </>
    )
}

export default AddTransectionModel
