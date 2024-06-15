import React, { useState } from "react";
import TopBar from "../../components/topBar";
import TopSection from "../../components/topSection";
import BeneficiaryTable from "../../components/beneficiaryTable";
import config from "../../common/config";
import BeneficiaryForm from "../../components/beneficiaryForm";

const ManageBeneficiary = () => {
    const [showForm, toggleForm] = useState(false);
    const addBtnClickHandler = () => {
        toggleForm(true);
    }
    const data = [];
    return <>
        <TopBar title={"Manage Beneficiary"} />
        <div className="container_wrap">
            <TopSection text={"Home / List of beneficiaries"} showBtn={true} btnTxt={"Add Beneficiary"} clickHandler={addBtnClickHandler} />
            <BeneficiaryTable columns={config.beneficiaryColumns} data={data} />
        </div>
        <BeneficiaryForm
            showForm={showForm}
            title={"Add Beneficiary"}
            closeModal={toggleForm}
            viewOnly={false}
        />
    </>
}

export default ManageBeneficiary;