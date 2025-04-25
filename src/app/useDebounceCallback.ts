
import { useCallback, useRef } from "react";

// A custom hook for debouncing a callback without lodash.
export function useDebouncedCallback(callback: Function, delay: number) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback((params: unknown) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      callback(params);
    }, delay);
  }, [callback, delay]);
}