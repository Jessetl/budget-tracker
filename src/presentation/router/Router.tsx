import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));

const NotFound: React.FC = () => <div>404 — Página no encontrada</div>;

export default function AppRouter(): React.JSX.Element {
  return (
    <Suspense
      fallback={
        <div role='status' aria-live='polite'>
          Cargando...
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
