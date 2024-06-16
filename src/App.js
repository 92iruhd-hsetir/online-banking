import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes";
import BeneficiaryForm from "./components/beneficiaryForm";
import ToastAlert from "./components/toastAlert";

const App = () => {
    const isFormOpen = useSelector((state) => state.beneficiary.isFormOpen);
    const toastDetails = useSelector((state) => state.beneficiary.toastDetails);
    return <div>
        <Routes />
        {isFormOpen ? <BeneficiaryForm /> : null}
        {toastDetails && toastDetails.showToast ? <ToastAlert /> : null}
    </div>
}

export default App;