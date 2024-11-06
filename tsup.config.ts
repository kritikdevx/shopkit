import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'client/index': 'src/client/index.ts',
    'server/index': 'src/server/index.ts',
    'common/index': 'src/common/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  external: [
    'react',
    'react-dom',
    'react-native',
    'redux-saga',
    'react-redux',
    'redux-persist',
    '@reduxjs/toolkit',
    'react/jsx-runtime',
    'redux-persist/integration/react',
    'redux-saga/effects',
    'redux-persist/lib/storage/createWebStorage',
  ],
  target: 'esnext',
  outDir: 'dist',
  splitting: false,
  onSuccess: 'node scripts/addClientDirective.js',
});
