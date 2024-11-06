import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Define the Storage type interface
type Storage = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
};

// Function to create a no-op storage
const createNoopStorage = (): Storage => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, _value) {
      return Promise.resolve();
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Create a storage instance based on the environment
const storageInstance: Storage = (() => {
  if (typeof window !== 'undefined') {
    // Client-side: Wrap storage methods to return Promises
    return {
      getItem(key: string): Promise<string | null> {
        return new Promise((resolve) => {
          resolve(storage.getItem(key)); // Synchronous call wrapped in Promise
        });
      },
      setItem(key: string, value: string): Promise<void> {
        return new Promise((resolve) => {
          storage.setItem(key, value); // Synchronous call wrapped in Promise
          resolve();
        });
      },
      removeItem(key: string): Promise<void> {
        return new Promise((resolve) => {
          storage.removeItem(key); // Synchronous call wrapped in Promise
          resolve();
        });
      },
    };
  }
  // Server-side: Return the no-op storage
  return createNoopStorage();
})();

export default storageInstance;
