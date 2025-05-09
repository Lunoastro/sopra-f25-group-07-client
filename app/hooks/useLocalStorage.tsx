"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

interface LocalStorageContextValue {
  [key: string]: any; // Allows access to state values by key
  setValue: (key: string, value: any) => void;
}

const LocalStorageContext = createContext<LocalStorageContextValue | undefined>(undefined);

export const LocalStorageProvider = ({ children }: { children: React.ReactNode }) => {
  const [storage, setStorage] = useState<{ [key: string]: any }>(() => {
    if (typeof window === 'undefined') return {};
    const stored: { [key: string]: any } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        try {
          stored[key] = JSON.parse(localStorage.getItem(key) as string);
        } catch (error) {
          console.error(`Error reading localStorage key "${key}":`, error);
        }
      }
    }
    return stored;
  });

  const setValue = useCallback((key: string, value: any) => {
    setStorage((prevStorage) => ({ ...prevStorage, [key]: value }));
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, []);

  return (
    <LocalStorageContext.Provider value={{ ...storage, setValue }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

export const useLocalStorageContext = (): LocalStorageContextValue => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error('useLocalStorageContext must be used within a LocalStorageProvider');
  }
  return context;
};

interface LocalStorageHookResult<T> {
  value: T | null;
  set: (newValue: T | null) => void;
  clear: () => void;
}

function useLocalStorage<T>(key: string, defaultValue: T | null = null): LocalStorageHookResult<T> {
  const localStorageContext = useLocalStorageContext();
  const storedValue = localStorageContext[key] as T | null;
  const [value, setValue] = useState<T | null>(storedValue !== undefined ? storedValue : defaultValue);

  const set = useCallback((newValue: T | null) => {
    setValue(newValue);
    if (localStorageContext?.setValue) { // Ensure context and setValue exist
      localStorageContext.setValue(key, newValue); // Call the context's setValue to update localStorage
    }
  }, [key, localStorageContext]);

  const clear = useCallback(() => {
    setValue(defaultValue);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
    if (localStorageContext?.setValue) { // Ensure context and setValue exist
      localStorageContext.setValue(key, defaultValue); // Update context as well
    }
  }, [defaultValue, key, localStorageContext]);

  useEffect(() => {
    if (localStorageContext && localStorageContext[key] !== value) {
      setValue(localStorageContext[key] as T | null);
    }
  }, [key, localStorageContext, value]);

  return { value, set, clear };
}

export default useLocalStorage;