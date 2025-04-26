import { useState, useEffect } from "react";

const useSearchInput = (
  onSearch: (value: string) => void,
  delay: number = 400,
) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue, delay, onSearch]);

  return {
    inputValue,
    setInputValue,
  };
};

export default useSearchInput;
