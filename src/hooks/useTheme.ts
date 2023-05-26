import { Theme } from '@/types/types';
import { useEffect, useState } from 'react';

export const useTheme = (): {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
} => {
  const [theme, setTheme] = useState<Theme>(Theme.dark);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (!userPrefersDark) setTheme(Theme.light);
    }
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, setTheme: handleThemeChange };
};
