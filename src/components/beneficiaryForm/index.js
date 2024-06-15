import React, { useEffect, useState } from "react";
import config from "../../common/config";

const BeneficiaryForm = ({ viewOnly, title, showForm, closeModal, user }) => {
    let { uid = "", full_name = "", address = "", country_id = 0, country_name = "", pincode = "" } = user || {};
    const [details, setDetails] = useState({
        uid,
        full_name,
        address,
        country_id,
        country_name,
        pincode
    })
    const [isSaveEnabled, toggleEnableSave] = useState(false);
    const closePopup = () => {
        closeModal(false);
    }

    const updateName = (e) => {
        let newName = e.target.value || "";
        const newDetails = { ...details, full_name: newName };
        setDetails(newDetails);
        toggleEnableSave(checkEdits(newDetails));
    }

    const updateAddress = (e) => {
        let newAddress = e.target.value || "";
        const newDetails = { ...details, address: newAddress };
        setDetails(newDetails);
        toggleEnableSave(checkEdits(newDetails));
    }

    const updateCountry = (e) => {
        let newCountry = config.countryOptions.find(c => c.id == e.target.value);
        const newDetails = { ...details, country_id: newCountry.id, country_name: newCountry.name };
        setDetails(newDetails);
        toggleEnableSave(checkEdits(newDetails));
    }

    const updatePincode = (e) => {
        let newPincode = e.target.value || "";
        const newDetails = { ...details, pincode: newPincode }
        setDetails(newDetails);
        toggleEnableSave(checkEdits(newDetails));
    }

    const validateFields = (newDetails) => {
        return !(
            newDetails.full_name == ""
            || newDetails.address == ""
            || newDetails.country_id == 0
            || newDetails.pincode == ""
        )
    }

    const checkEdits = (newDetails) => {
        return (
            newDetails.full_name != full_name
            || newDetails.address != address
            || newDetails.country_id != country_id
            || newDetails.pincode != pincode
        ) && validateFields(newDetails)
    }

    useEffect(() => {
        toggleEnableSave(checkEdits(details));
    }, []);

    return <>
        <div className={`modal ${showForm ? "" : "hidden"}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <h3>{title}</h3>
                </div>
                <div className="modal-body">
                    <form action="/action_page.php">
                        <div className="form_group">
                            <label htmlFor="fullname">Full Name</label>
                            {
                                viewOnly
                                    ? <label>{details.full_name}</label>
                                    : <input type="text" id="fullname" name="fullname" value={details.full_name} onChange={updateName} placeholder="Enter Full Name" />
                            }
                        </div>
                        <div className="form_group">
                            <label htmlFor="address">Address</label>
                            {
                                viewOnly
                                    ? <label>{details.address}</label>
                                    : <textarea id="address" name="address" value={details.address} onChange={updateAddress} placeholder="Enter Address" />
                            }
                        </div>
                        <div className="form_group">
                            <label htmlFor="country">Country</label>
                            {
                                viewOnly
                                    ? <label>{details.country_name}</label>
                                    : <select id="country" name="country" defaultValue={details.country_id} onChange={updateCountry}>
                                        {
                                            config.countryOptions.map(c => {
                                                return <option key={c.id} value={c.id}>{c.name}</option>
                                            })
                                        }
                                    </select>
                            }
                        </div>
                        <div className="form_group">
                            <label htmlFor="pincode">Pincode</label>
                            {
                                viewOnly
                                    ? <label>{details.pincode}</label>
                                    : <input type="text" id="pincode" name="pincode" value={details.pincode} onChange={updatePincode} placeholder="Enter Pincode" />
                            }
                        </div>
                    </form>
                </div>
                {
                    viewOnly
                        ? null
                        : <div className="modal-footer">
                            <button className="btn confirm_btn" disabled={!isSaveEnabled}>Save</button>
                        </div>
                }
            </div>
        </div>
    </>
}

export default BeneficiaryForm;