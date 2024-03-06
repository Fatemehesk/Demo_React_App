import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue = 'light') => {
  const [value, setvalue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
      console.log(currentValue, "try");
    } catch (error) {
      console.log(error, "error");
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setvalue];
};
