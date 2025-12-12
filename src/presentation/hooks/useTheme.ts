import { useContext } from 'react';
import { ThemeContext } from '@/presentation/contexts/ThemeContext';
import type { ThemeContextType } from '@/domain/entities/Theme';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
