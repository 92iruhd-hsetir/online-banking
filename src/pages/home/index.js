import React from "react";
import { useNavigate } from "react-router-dom";
import config from "../../common/config";

import TopBar from "../../components/topBar";
import TopSection from "../../components/topSection";

const Home = () => {
    let history = useNavigate();
    const onManageClick = () => {
        history(config.pageUrls.manageBeneficiary);
    }
    return <>
        <TopBar title={"Home"} />
        <TopSection text={"Welcome User!"} showBtn={true} btnTxt={"Manage Beneficiary"} clickHandler={onManageClick} />
    </>
}

export default Home;