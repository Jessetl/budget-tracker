export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  error: string;
  warning: string;
  success: string;
  [key: string]: string; // Para colores adicionales
}

export interface ThemeTypography {
  fontFamily: string;
  fontSize: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
  fontWeight: {
    normal: number;
    medium: number;
    bold: number;
  };
}

export interface ThemeSpacing {
  unit: number;
  small: string;
  medium: string;
  large: string;
}

export interface ThemeContextType {
  theme: ThemeMode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}
