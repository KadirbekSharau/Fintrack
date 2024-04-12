import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import authApi, { AUTH_API_REDUCER_KEY } from '~/api/auth/api';
import transactionsApi, { TRANSACTIONS_API_REDUCER_KEY } from '~/api/transactions/api';
import { authReducer, authSlice } from '~/features/auth';

const reducers = {
  [authSlice.name]: authReducer,
  [AUTH_API_REDUCER_KEY]: authApi.reducer,
  [TRANSACTIONS_API_REDUCER_KEY]: transactionsApi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([authApi.middleware]),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
