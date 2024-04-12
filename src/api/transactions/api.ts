// src/services/transactionsApi.js
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '..';

export const TRANSACTIONS_API_REDUCER_KEY = 'transactionsApi';

const transactionsApi = createApi({
  reducerPath: TRANSACTIONS_API_REDUCER_KEY,
  baseQuery,
  tagTypes: ['Transactions'],
  endpoints: (builder) => ({
    // Fetch the balance summary
    getBalanceSummary: builder.query({
      query: () => '/transactions/summary',
      providesTags: ['Transactions'],
    }),
    // Fetch all transactions
    getTransactions: builder.query({
      query: () => '/transactions/all',
      providesTags: ['Transactions'],
    }),
    // Add more endpoints as needed
  }),
});

export const { useGetBalanceSummaryQuery, useGetTransactionsQuery } = transactionsApi;

export default transactionsApi;
