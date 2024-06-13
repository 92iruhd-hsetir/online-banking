import React from "react";
import TopBar from "../../components/topBar";
import TopSection from "../../components/topSection";

const ManageBeneficiary = () => {
    const addBtnClickHandler = () => {
        console.log("open beneficiary form");
    }
    return <>
        <TopBar title={"Manage Beneficiary"} />
        <TopSection text={"Home / List of beneficiaries"} showBtn={true} btnTxt={"Add Beneficiary"} clickHandler={addBtnClickHandler} />
    </>
}

export default ManageBeneficiary;