import { useState, useEffect } from 'react';

export function useDebounce<T>(initialState: T, timeout = 500){
    const [debouncedState, setDebouncedState] = useState(initialState);
    
    useEffect(()=> {
      const timer = setTimeout(()=> {
        setDebouncedState(initialState)
      }, timeout);
      
      return () => {
        clearInterval(timer)
      }
    }, [initialState, timeout])

  return [debouncedState] as const;
}