import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "../../components/topBar";
import TopSection from "../../components/topSection";
import BeneficiaryTable from "../../components/beneficiaryTable";
import config from "../../common/config";
import { useGetBeneficiaryListQuery } from "../../redux/services/beneficiary";
import { setBeneficiaryList, setFormDetails, setIsFormOpen } from "../../redux/features/beneficiary";

const ManageBeneficiary = () => {
    const dispatch = useDispatch();
    const beneficiaryList = useSelector((state) => state.beneficiary.list);

    const {
        data: beneResp,
        // error: beneError,
        // isLoading: isBeneLoading
    } = useGetBeneficiaryListQuery();

    useEffect(() => {
        if (beneResp?.list) {
            dispatch(setBeneficiaryList(beneResp.list));
        }
    }, [beneResp, dispatch])

    const addBtnClickHandler = () => {
        dispatch(setFormDetails({ type: config.formActions.add, selectedUser: null, viewOnly: false }));
        dispatch(setIsFormOpen(true));
    }

    return <>
        <TopBar title={"Manage Beneficiary"} />
        <div className="container_wrap">
            <TopSection text={"Home / List of beneficiaries"} showBtn={true} btnTxt={"Add Beneficiary"} clickHandler={addBtnClickHandler} />
            <BeneficiaryTable columns={config.beneficiaryColumns} data={beneficiaryList} />
        </div>
    </>
}

export default ManageBeneficiary;