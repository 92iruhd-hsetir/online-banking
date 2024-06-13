const config = {};
config.urlBasePath = `${process.env.PUBLIC_URL}/`;
config.imageBasePath = `${config.urlBasePath}images/`;

config.pageUrls = {
    "home": "/",
    "manageBeneficiary": "/manage-beneficiary"
}

export default config;