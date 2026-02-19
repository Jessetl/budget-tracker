import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../../../router/Router';
import MainLayout from '@/shared/components/Layouts/MainLayout';
import AppShellHeader from './AppShellHeader';
import AppShellFooter from './AppShellFooter';

const AppShell = (): React.JSX.Element => {
  return (
    <MainLayout header={<AppShellHeader />} footer={<AppShellFooter />}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MainLayout>
  );
};

export default AppShell;
