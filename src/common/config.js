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

export default config;