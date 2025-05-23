'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import storage from './storage';
import rootSaga from './middlewares';
import { cartSlice } from './slices/cart.slice';
import { customerSlice } from './slices/customer.slice';
import { customSlice } from './slices/custom.slice';

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [customerSlice.name]: customerSlice.reducer,
  [customSlice.name]: customSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'shopkit-root',
  storage,
  whitelist: [cartSlice.name, customSlice.name, customerSlice.name],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Store Creation
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});

// Run Saga Middleware
sagaMiddleware.run(rootSaga);

// Persisted Store
const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
