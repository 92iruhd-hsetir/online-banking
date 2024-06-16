const config = {};
config.urlBasePath = `${process.env.PUBLIC_URL}/`;
// config.apiBasePath = `${config.urlBasePath}apis/`;
config.apiBasePath = `http://localhost:3001/`;
config.imageBasePath = `${config.urlBasePath}images/`;

config.pageUrls = {
    "home": "/",
    "manageBeneficiary": "/manage-beneficiary"
}

config.beneficiaryColumns = [
    {
        head_title: "#",
        key_name: "rno",
    },
    {
        head_title: "Full Name",
        key_name: "full_name",
    },
    {
        head_title: "Address",
        key_name: "address",
    },
    {
        head_title: "Country",
        key_name: "country_name",
    },
    {
        head_title: "PinCode",
        key_name: "pincode",
    },
    {
        head_title: "",
        key_name: "",
        showActions: true
    }
]

config.countryOptions = [
    {
        id: 0,
        name: "Select Country"
    },
    {
        id: 1,
        name: "Australia"
    },
    {
        id: 2,
        name: "Canada"
    },
    {
        id: 3,
        name: "India"
    },
    {
        id: 4,
        name: "SouthAfrica"
    },
    {
        id: 5,
        name: "USA"
    }
]

config.formActions = {
    "add": 1,
    "view": 2,
    "edit": 3,
    "delete": 4
}

config.formTitles = {
    [config.formActions.add]: "Add Beneficiary",
    [config.formActions.view]: "View Beneficiary",
    [config.formActions.edit]: "Edit Beneficiary",
    [config.formActions.delete]: "delete Beneficiary"
};

config.toastTimeout = 3000;

config.toastTypes = {
    "success": 1,
    "warning": 2,
    "info": 3,
    "danger": 4
}

config.toastClass = {
    [config.toastTypes.success]: "success",
    [config.toastTypes.warning]: "warning",
    [config.toastTypes.info]: "info",
    [config.toastTypes.danger]: "danger",
}

export default config;