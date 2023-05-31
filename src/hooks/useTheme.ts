import { useState } from 'react';
import { Theme } from '@/types/types';

type themeState = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};

export const useTheme = (): themeState => {
  const getUserTheme = (): Theme => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    } else {
      const userPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      return userPrefersDark ? Theme.dark : Theme.light;
    }
  };

  const [theme, setTheme] = useState<Theme>(getUserTheme());

  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, setTheme: handleThemeChange };
};
