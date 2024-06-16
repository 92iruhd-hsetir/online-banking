import { createSlice } from "@reduxjs/toolkit";

const beneficiarySlice = createSlice({
    name: 'beneficiary',
    initialState: {
        selectedUser: null,
        list: [],
        formDetails: null,
        isFormOpen: false,
        toastDetails: null,
        deleteDetails: null
    },
    reducers: {
        setBeneficiaryList(state, action) {
            return { ...state, list: action.payload };
        },
        setIsFormOpen(state, action) {
            return { ...state, isFormOpen: action.payload };
        },
        setFormDetails(state, action) {
            const { selectedUser, type, viewOnly } = action.payload;
            return { ...state, selectedUser: selectedUser, formDetails: { type, viewOnly } };
        },
        setToastDetails(state, action) {
            return { ...state, toastDetails: action.payload };
        },
        setDeleteDetails(state, action) {
            return { ...state, deleteDetails: action.payload };
        },
        resetData(state, action) {
            return {
                selectedUser: null,
                list: [],
                formDetails: null,
                isFormOpen: false,
                toastDetails: null,
                deleteDetails: null
            };
        }
    }
})

export const { setBeneficiaryList, setIsFormOpen, setFormDetails, setToastDetails, setDeleteDetails, resetData } = beneficiarySlice.actions;
export default beneficiarySlice.reducer;