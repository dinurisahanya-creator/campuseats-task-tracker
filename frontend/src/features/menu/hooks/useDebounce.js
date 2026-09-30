import { useState, useEffect } from "react";

// Custom hook to delay updating state value (useful for search inputs)
export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const id = setTimeout(() => setDebounced(value), delay);
    
    // Clear timeout if value changes before the delay expires
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}