import React from 'react';

const MainLayout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <div className='flex items-center justify-center phone-frame'>
      <div className='flex flex-col'>
        <header className='flex items-center justify-between mb-4'>
          <div className='w-10 h-10 bg-gray-200 rounded-full' />
          <div className='text-sm text-gray-500'>
            Simulación Teléfono — 450px max
          </div>
        </header>
        <main className='flex-1 overflow-auto px-2 py-4'>{children}</main>
        <footer className='mt-4 flex justify-center'>
          <button className='px-[4px] py-2 bg-primary text-white rounded'>
            Acción
          </button>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
