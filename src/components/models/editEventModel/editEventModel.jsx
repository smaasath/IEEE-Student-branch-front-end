import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const EditEventModal = ({ onHide, show, eventData, editable }) => {
    const [formData, setFormData] = useState(eventData || {});

    // Use useEffect to update formData when eventData changes
    useEffect(() => {
        if (eventData) {
            setFormData(eventData);
        }
    }, [eventData]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    if (!eventData) return null;

    return (
            <Modal
    show={show}
    onHide={onHide}
    animation={true}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
>
    <Modal.Header closeButton>
        <Modal.Title className="text-cl-primary" id="contained-modal-title-vcenter">
            Edit Details
        </Modal.Title>
    </Modal.Header>

                <Modal.Body>
                <div className="d-flex flex-column align-items-center">
                    <div className="w-100">
                        <div className="mb-3">
                            <label className="form-label text-dark">Event Name</label>
                                           <input
                                type="text"
                                name="eventName"
                                className="form-control"
                                value={formData.eventName || ''}
                                onChange={editable ? handleInputChange : undefined}
                                disabled={!editable} // Make input non-editable based on editable prop
                            />
                        </div>
                                                <div className="mb-3">
                            <label className="form-label text-dark">Date</label>
                            <input
                                type="text"
                                name="date"
                                className="form-control"
                                value={formData.date || ''}
                                onChange={editable ? handleInputChange : undefined}
                                disabled={!editable}
                            />
                        </div>
                                                <div className="mb-3">
                            <label className="form-label text-dark">Venue</label>
                            <input
                                type="text"
                                name="venue"
                                className="form-control"
                                value={formData.venue || ''}
                                onChange={editable ? handleInputChange : undefined}
                                disabled={!editable}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark">Description</label>
                                                        <textarea
                                name="description"
                                className="form-control"
                                value={formData.description || ''}
                                onChange={editable ? handleInputChange : undefined}
                                rows={4}
                                disabled={!editable}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-dark">Link</label>
                                                         <input
                                type="text"
                                name="event_link"
                                className="form-control"
                                value={formData.event_link || ''}
                                onChange={editable ? handleInputChange : undefined}
                                disabled={!editable}
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>

                       <Modal.Footer className="d-flex justify-content-end mt-3">
                <div>
                <CommonButton onClick={onHide} close={true} text={"save"} />
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default EditEventModal;
