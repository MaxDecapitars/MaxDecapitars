import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', listener);

    return () => mediaQuery.removeEventListener('change', listener);
  }, [mediaQuery]);

  return matches;
};
