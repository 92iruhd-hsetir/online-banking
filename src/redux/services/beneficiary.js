import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../../common/config'

export const beneficiaryServices = createApi({
    reducerPath: 'beneficiary-services',
    baseQuery: fetchBaseQuery({ baseUrl: `${config.apiBasePath}beneficiary` }),
    tagTypes: ['beneList'],
    endpoints: (builder) => ({
        getBeneficiaryList: builder.query({
            query: () => ({
                url: '/list',
                method: 'GET'
            }),
            providesTags: ['beneList']
        }),
        addBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/update',
                method: 'POST',
                body: user
            }),
            invalidatesTags: (result, error, id) => {
                return (result && result.success) ? ['beneList'] : []
            },
        }),
        updateBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/update',
                method: 'POST',
                body: user
            }),
            invalidatesTags: (result, error, id) => {
                return (result && result.success) ? ['beneList'] : []
            },
        }),
        deleteBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/delete',
                method: 'POST',
                body: user
            }),
            invalidatesTags: (result, error, id) => {
                return (result && result.success) ? ['beneList'] : []
            },
        })
    })

})

export const { useGetBeneficiaryListQuery, useAddBeneficiaryMutation, useUpdateBeneficiaryMutation, useDeleteBeneficiaryMutation } = beneficiaryServices;