import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '..';
import {
  LoginResponse,
  LoginRequest,
  SignupResponse,
  SignupRequest,
} from './types';

export const AUTH_API_REDUCER_KEY = 'localhost:3000/';

const authApi = createApi({
  reducerPath: AUTH_API_REDUCER_KEY,
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (credentials) => ({
        url: '/user/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
});

export default authApi;
