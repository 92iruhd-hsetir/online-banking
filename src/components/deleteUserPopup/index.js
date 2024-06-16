import React from 'react'
import { setDeleteDetails } from '../../redux/features/beneficiary';
import { useDispatch } from 'react-redux';

const DeleteUserPopup = ({user, confirmHandler}) => {
    const dispatch = useDispatch();
    const closePopup = () => {
        dispatch(setDeleteDetails(null));
    }

    return <>
        <div className="modal confirmation">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Are you sure?</h3>
                </div>
                <div className="modal-body">
                    <p className="confirmation_question">Do you want to delete <strong>{user.full_name}</strong> from your beneficiary list.</p>
                </div>
                <div className="modal-footer">
                    <button className="btn cancel_btn" onClick={closePopup}>Cancel</button>
                    <button className="btn delete_btn" onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
        </div>
    </>
}

export default DeleteUserPopup;
