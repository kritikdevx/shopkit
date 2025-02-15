'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import { ShopKit, ShopKitConfig } from '@/common';

/**
 * ShopKit Provider
 * @param children
 * @constructor
 * @return JSX.Element
 * @example
 * ```tsx
 * <ShopKitProvider>
 *  <App />
 * </ShopKitProvider>
 * ```
 * @description
 * This provider is used to wrap the application with the Redux store and persistor.
 * It is used to provide the Redux store to the application.
 */
export function ShopKitProvider({
  children,
  config,
  loading = null,
}: {
  children: React.ReactNode;
  config: ShopKitConfig;
  loading?: React.ReactNode;
}) {
  ShopKit.configure(config);

  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
