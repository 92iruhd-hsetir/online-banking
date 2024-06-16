import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import beneficiaryReducer from '../features/beneficiary'
import { beneficiaryServices } from '../services/beneficiary'

export const store = configureStore({
    reducer: {
        [beneficiaryServices.reducerPath]: beneficiaryServices.reducer,
        beneficiary: beneficiaryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beneficiaryServices.middleware)
})

setupListeners(store.dispatch);