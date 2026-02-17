import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './presentation/providers/ThemeProvider';
import AppRouter from './presentation/router/Router';
// Layouts
import MainLayout from '@/shared/components/Layouts/MainLayout';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <MainLayout>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
