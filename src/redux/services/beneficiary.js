import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../common/config'

export const beneficiaryServices = createApi({
    reducerPath: 'beneficiary-services',
    baseQuery: fetchBaseQuery({ baseUrl: `${config.apiBasePath}beneficiary` }),
    endpoints: (builder) => ({
        getBeneficiaryList: builder.query({
            query: () => ({
                url: '/list',
                method: 'GET'
            })
        }),
        addBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/update',
                method: 'POST',
                body: user
            })
        }),
        updateBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/update',
                method: 'POST',
                body: user
            })
        }),
        deleteBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/delete',
                method: 'POST',
                body: user
            })
        })
    })

})

export const { useGetBeneficiaryListQuery, useAddBeneficiaryMutation, useUpdateBeneficiaryMutation, useDeleteBeneficiaryMutation } = beneficiaryServices;