import React from "react";
import NoData from "../noData";
import { useSelector, useDispatch } from "react-redux";
import config from "../../common/config";
import { setIsFormOpen, setFormDetails, setDeleteDetails, setToastDetails } from "../../redux/features/beneficiary";
import DeleteUserPopup from "../deleteUserPopup";
import { useDeleteBeneficiaryMutation } from "../../redux/services/beneficiary";

const Actions = ({ user }) => {
    const dispatch = useDispatch();

    return <>
        <img
            className="actions"
            src={`${config.imageBasePath}actions/edit.png`}
            alt="edit"
            loading="lazy"
            onClick={() => {
                dispatch(setFormDetails({ type: config.formActions.edit, selectedUser: user, viewOnly: false }));
                dispatch(setIsFormOpen(true));
            }}
        />
        <img
            className="actions"
            src={`${config.imageBasePath}actions/delete.png`}
            alt="delete"
            loading="lazy"
            onClick={() => {
                dispatch(setDeleteDetails({ selectedUser: user, showPopup: true }));
            }}
        />
        <img
            className="actions"
            src={`${config.imageBasePath}actions/view.png`}
            alt="view"
            loading="lazy"
            onClick={() => {
                dispatch(setFormDetails({ type: config.formActions.view, selectedUser: user, viewOnly: true }));
                dispatch(setIsFormOpen(true));
            }}
        />
    </>
}

const BeneficiaryTable = ({ columns, data }) => {
    const dispatch = useDispatch();
    const deleteDetails = useSelector((state) => state.beneficiary.deleteDetails);
    const [deleteBeneficiary] = useDeleteBeneficiaryMutation();

    const deleteUser = async (payload) => {
        const resp = await deleteBeneficiary(payload);
        const { message, success } = resp?.data || {};
        // dispatch message here for toast
        if (success) {
            dispatch(setToastDetails({ type: config.toastTypes.success, message: message, showToast: true }));
            dispatch(setDeleteDetails(null));
        } else {
            dispatch(setToastDetails({ type: config.toastTypes.danger, message: message, showToast: true }));
        }
    }

    return <>
        <div className="table_wrap">
            {
                (data && data.length)
                    ? <table className="beneficiary_table">
                        <thead>
                            <tr>
                                {
                                    columns.map(c => {
                                        return <th key={c.key_name}>{c.head_title}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d, d_index) => {
                                    return <tr key={d_index}>
                                        {
                                            columns.map(c => {
                                                if (c.showActions) {
                                                    return <td key={`${c.key_name}_d_index`}><Actions user={d} /></td>
                                                } else if (c.key_name === "rno") {
                                                    return <td key={`${c.key_name}_d_index`}>{d_index + 1}</td>
                                                } else if (c.key_name) {
                                                    return <td key={`${c.key_name}_d_index`}>{d[c.key_name]}</td>
                                                } else {
                                                    return "-";
                                                }
                                            })
                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    : <NoData message={"No Beneficiary Available"} />
            }
        </div>
        {
            deleteDetails && deleteDetails.showPopup
                ? <DeleteUserPopup user={deleteDetails.selectedUser} confirmHandler={() => deleteUser(deleteDetails.selectedUser)} />
                : null
        }
    </>
}

export default BeneficiaryTable;