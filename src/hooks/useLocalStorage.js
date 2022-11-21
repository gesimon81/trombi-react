import { useCallback, useLayoutEffect, useState, useTransition } from "react";
export function localStorageGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

export function localStorageSetItem(key, value) {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {}
}

// Forked from https://usehooks.com/useLocalStorage/
// https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
export default function useLocalStorage(
  key,
  initialValue,
  scheduleUpdatesAsTransitions = false
) {
  const [isPending, startTransition] = useTransition();

  const [value, setValue] = useState(() => {
    const storedValue = localStorageGetItem(key);
    if (storedValue != null) {
      return JSON.parse(storedValue);
    } else {
      return initialValue;
    }
  });

  const setValueWrapper = useCallback(
    (action) => {
      if (scheduleUpdatesAsTransitions) {
        startTransition(() => {
          setValue(action);
        });
      } else {
        setValue(action);
      }
    },
    [scheduleUpdatesAsTransitions]
  );

  // Listen for changes to this local storage value made from other windows.
  useLayoutEffect(() => {
    const onStorage = () => {
      const newValue = localStorageGetItem(key);
      if (newValue != null) {
        startTransition(() => {
          setValue(JSON.parse(newValue));
        });
      }
    };

    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [key]);

  // Sync changes to local storage
  useLayoutEffect(() => {
    const string = JSON.stringify(value);

    localStorageSetItem(key, string);
  }, [key, value]);

  return [value, setValueWrapper, isPending];
}
