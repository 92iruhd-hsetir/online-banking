import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import config from '../../common/config';
import { setToastDetails } from '../../redux/features/beneficiary';

const ToastAlert = () => {
    const dispatch = useDispatch();
    const toastDetails = useSelector((state) => state.beneficiary.toastDetails);
    const { type, message, showToast } = toastDetails;

    const closeToast = () => {
        dispatch(setToastDetails(null));
    }

    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                dispatch(setToastDetails(null));
            }, config.toastTimeout);
        }
    }, [showToast])

    return (
        <div className={`alert_box ${config.toastClass[type] ? config.toastClass[type] : ""}`}>
            <span className="closebtn" onClick={closeToast}>&times;</span>
            {message}
        </div>
    )
}

export default ToastAlert
