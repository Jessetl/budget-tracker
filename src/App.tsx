import { ThemeProvider } from './presentation/providers/ThemeProvider';
import AppShell from './presentation/components/shells/AppShell';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
