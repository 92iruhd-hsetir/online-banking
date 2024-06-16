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
            invalidatesTags: ['beneList']
        }),
        updateBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/update',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['beneList']
        }),
        deleteBeneficiary: builder.mutation({
            query: (user) => ({
                url: '/delete',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['beneList']
        })
    })

})

export const { useGetBeneficiaryListQuery, useAddBeneficiaryMutation, useUpdateBeneficiaryMutation, useDeleteBeneficiaryMutation } = beneficiaryServices;