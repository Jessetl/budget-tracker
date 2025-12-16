import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './presentation/providers/ThemeProvider';
import AppRouter from './presentation/router/Router';

function App() {
  return (
    <ThemeProvider defaultTheme='light'>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
