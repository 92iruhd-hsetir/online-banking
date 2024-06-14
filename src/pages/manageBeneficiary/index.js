import React from "react";
import TopBar from "../../components/topBar";
import TopSection from "../../components/topSection";
import BeneficiaryTable from "../../components/beneficiaryTable";
import config from "../../common/config";

const ManageBeneficiary = () => {
    const addBtnClickHandler = () => {
        console.log("open beneficiary form");
    }
    const data = [];
    return <>
        <TopBar title={"Manage Beneficiary"} />
        <div className="container_wrap">
            <TopSection text={"Home / List of beneficiaries"} showBtn={true} btnTxt={"Add Beneficiary"} clickHandler={addBtnClickHandler} />
            <BeneficiaryTable columns={config.beneficiaryColumns} data={data} />
        </div>
    </>
}

export default ManageBeneficiary;