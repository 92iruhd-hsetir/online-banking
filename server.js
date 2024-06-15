const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const crypto = require('crypto');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const beneficiaryFile = "public/apis/beneficiaries.json";

const getContent = (filePath, cb) => {
    fs.readFile(filePath, "utf-8", function (file_err, file_data) {
        if (file_err) {
            cb({ success: false, data: null });
        } else {
            cb({ success: true, data: file_data });
        }
    })
}

const saveContent = (filePath, content, cb) => {
    fs.writeFile(filePath, content, function (err) {
        if (err) {
            cb({ success: false, data: null });
        } else {
            cb({ success: true, data: content });
        }
    });
}

const generateUid = (existing) => {
    let available = false;
    let uid = null;
    do {
        const randomUid = crypto.randomBytes(8).toString('hex');
        if (!(existing || []).includes(randomUid)) {
            available = true;
            uid = randomUid;
        }
    }
    while (!available);
    return uid;
}

const updateList = (list, user) => {
    const allUids = list.map(u => u.uid);
    if (allUids.includes(user.uid)) {
        /* update existing */
        let updatedList = list.map(u => {
            if (u.uid === user.uid) {
                return { ...user }
            } else {
                return u;
            }
        });
        return {
            isNew: false,
            updatedList
        };
    } else {
        /* insert new */
        let userId = generateUid(allUids);
        return {
            isNew: true,
            updatedList: [...list, { uid: userId, ...user }]
        };
    }
}

app.post('/beneficiary/update', (req, res) => {
    const filePath = beneficiaryFile;

    if (Object.keys(req?.body).length) {
        const { full_name, address, country_name, pincode } = req.body;
        if (!full_name || !address || !country_name || !pincode) {
            res.json({ success: false, message: "Invalid details. Check details and try again." });
        } else {
            getContent(filePath, (resp) => {
                if (resp.success) {
                    let list = JSON.parse(resp.data);
                    let { isNew, updatedList } = updateList(list, req.body);
                    saveContent(filePath, JSON.stringify(updatedList), (saveResp) => {
                        if (saveResp.success) {
                            res.json({ success: saveResp.success, message: (isNew ? "Beneficiary Added successfully." : "Beneficiary Updated successfully.") });
                        } else {
                            res.json({ success: false, message: (isNew ? "Failed add Beneficiary." : "Failed update Beneficiary.") });
                        }
                    })
                } else {
                    res.json({ success: resp.success, message: "Something went wrong. Try again" });
                }
            })
        }
    } else {
        res.json({ success: false, message: "Details missing." });
    }
});

app.post("/beneficiary/delete", (req, res) => {
    const filePath = beneficiaryFile;
    if (!req?.body?.uid) {
        res.json({ success: false, message: "Provide the 'uid' of benificary" });
    }
    getContent(filePath, (resp) => {
        if (resp.success) {
            let list = JSON.parse(resp.data);
            const user = list.find(u => u.uid === req.body.uid);
            if (!user) {
                res.json({ success: false, message: "User not available in the system." });
            } else {
                const newList = list.filter(u => u.uid !== req.body.uid);
                saveContent(filePath, JSON.stringify(newList), (saveResp) => {
                    if (saveResp.success) {
                        res.json({ success: saveResp.success, message: "User deleted successfully." });
                    } else {
                        res.json({ success: false, message: "Failed to delete user." });
                    }
                })
            }
        } else {
            res.json({ success: resp.success, message: "Can not delete user." });
        }
    });
})

app.get('/beneficiary/list', (req, res) => {
    const filePath = beneficiaryFile;
    getContent(filePath, (resp) => {
        if (resp.success) {
            res.json({ success: resp.success, list: JSON.parse(resp.data) });
        } else {
            res.json({ success: resp.success, message: "Records not found." });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
