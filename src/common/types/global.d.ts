// src/types/global.d.ts
import { ShopKitConfig } from './config';

declare global {
  var __SHOPKIT_CONFIG__: Readonly<ShopKitConfig> | undefined;
}

export {}; // Make this a module
