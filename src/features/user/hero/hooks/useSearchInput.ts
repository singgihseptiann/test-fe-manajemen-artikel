import { useState, useEffect, useCallback } from "react";

const useSearchInput = (
  onSearch: (value: string) => void,
  delay: number = 400,
) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue, delay, onSearch]);

  useEffect(debouncedSearch, [debouncedSearch]);

  return {
    inputValue,
    setInputValue,
  };
};

export default useSearchInput;
