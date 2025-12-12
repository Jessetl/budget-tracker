import React from 'react';
import type { ThemeContextType } from '@/domain/entities/Theme';

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
