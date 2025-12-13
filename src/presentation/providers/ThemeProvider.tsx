import React, { useState, useEffect } from 'react';
import { ThemeContext } from '@/presentation/contexts/ThemeContext';
import type { ThemeMode } from '@/domain/entities/Theme';
import type { ThemeRepository } from '@/data/repositories/ThemeRepository';
import { LocalStorageThemeRepository } from '@/data/repositories/LocalStorageThemeRepository';

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeMode;
  themeRepository?: ThemeRepository;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  themeRepository = new LocalStorageThemeRepository(),
}) => {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme);

  // Inicializar tema desde el repositorio
  useEffect(() => {
    const savedTheme = themeRepository.getThemeMode();
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [themeRepository]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const root = document.documentElement;
    const body = document.body;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    body.classList.toggle('dark', isDark);

    themeRepository.setThemeMode(theme);
  }, [theme, themeRepository]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    theme,
    isDarkMode: theme === 'dark',
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
