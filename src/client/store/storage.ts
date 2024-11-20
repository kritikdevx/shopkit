import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShopKit } from '../../common/config/index';

interface PersistStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}

// Create a no-op storage for environments without localStorage
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

// Create a storage adapter that wraps localStorage
const createLocalStorageAdapter = (storage: Storage): PersistStorage => ({
  async getItem(key: string): Promise<string | null> {
    try {
      const item = storage.getItem(key);
      return Promise.resolve(item);
    } catch (err) {
      console.error('Error reading from storage:', err);
      return Promise.resolve(null);
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      storage.setItem(key, value);
      return Promise.resolve();
    } catch (err) {
      console.error('Error writing to storage:', err);
      return Promise.resolve();
    }
  },
  async removeItem(key: string): Promise<void> {
    try {
      storage.removeItem(key);
      return Promise.resolve();
    } catch (err) {
      console.error('Error removing from storage:', err);
      return Promise.resolve();
    }
  },
});

const createAsyncStorageAdapter = (
  storage: typeof AsyncStorage,
): PersistStorage => ({
  async getItem(key: string): Promise<string | null> {
    try {
      const item = await storage.getItem(key);
      return item;
    } catch (err) {
      console.error('Error reading from storage:', err);
      return null;
    }
  },
  async setItem(key: string, value: string): Promise<void> {
    try {
      await storage.setItem(key, value);
      return;
    } catch (err) {
      console.error('Error writing to storage:', err);
      return;
    }
  },
  async removeItem(key: string): Promise<void> {
    try {
      await storage.removeItem(key);
      return;
    } catch (err) {
      console.error('Error removing from storage:', err);
      return;
    }
  },
});

// Initialize storage based on environment
const storage: PersistStorage =
  typeof window !== 'undefined'
    ? ShopKit.getConfig().origin === 'web'
      ? createLocalStorageAdapter(window.localStorage)
      : createAsyncStorageAdapter(AsyncStorage)
    : createNoopStorage();

export default storage;
