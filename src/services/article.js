import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const articleApi=createApi({
    reducerPath:'articleApi',
    endpoints:(builer)=>({
        getSummary: builer.query({
            query:(params)=>`test`
        })
    })
});