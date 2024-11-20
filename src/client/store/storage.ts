import AsyncStorage from '@react-native-async-storage/async-storage';

interface PersistStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

// Create a no-op storage for unsupported platforms or server environments
const createNoopStorage = (): PersistStorage => ({
  getItem(_key: string): Promise<null> {
    return Promise.resolve(null);
  },
  setItem(_key: string, _value: string): Promise<void> {
    return Promise.resolve();
  },
  removeItem(_key: string): Promise<void> {
    return Promise.resolve();
  },
});

// Create a storage adapter for web localStorage
const createLocalStorageAdapter = (storage: Storage): PersistStorage => ({
  async getItem(key: string): Promise<string | null> {
    try {
      return storage.getItem(key);
    } catch (err) {
      console.error('Error reading from localStorage:', err);
      return null;
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      storage.setItem(key, value);
    } catch (err) {
      console.error('Error writing to localStorage:', err);
    }
  },
  async removeItem(key: string): Promise<void> {
    try {
      storage.removeItem(key);
    } catch (err) {
      console.error('Error removing from localStorage:', err);
    }
  },
});

// Create a storage adapter for AsyncStorage in React Native
const createAsyncStorageAdapter = (
  storage: typeof AsyncStorage,
): PersistStorage => ({
  async getItem(key: string): Promise<string | null> {
    try {
      return await storage.getItem(key);
    } catch (err) {
      console.error('Error reading from AsyncStorage:', err);
      return null;
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      await storage.setItem(key, value);
    } catch (err) {
      console.error('Error writing to AsyncStorage:', err);
    }
  },
  async removeItem(key: string): Promise<void> {
    try {
      await storage.removeItem(key);
    } catch (err) {
      console.error('Error removing from AsyncStorage:', err);
    }
  },
});

// Detect if the environment is React Native
const isReactNative = (): boolean =>
  typeof navigator !== 'undefined' &&
  typeof navigator.userAgent === 'string' &&
  (navigator.userAgent.includes('ReactNative') ||
    navigator.userAgent.includes('react-native'));

// Initialize storage based on the environment
const storage: PersistStorage = (() => {
  if (
    typeof window !== 'undefined' &&
    typeof window.localStorage !== 'undefined'
  ) {
    // Web environment
    return createLocalStorageAdapter(window.localStorage);
  } else if (isReactNative() && AsyncStorage !== null) {
    // React Native environment
    return createAsyncStorageAdapter(AsyncStorage);
  } else {
    // Server or unsupported environment
    return createNoopStorage();
  }
})();

export default storage;
