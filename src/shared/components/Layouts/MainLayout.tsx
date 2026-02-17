import React from 'react';

type MainLayoutProps = React.PropsWithChildren<{
  header?: React.ReactNode;
  footer?: React.ReactNode;
}>;

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  header,
  footer,
}) => {
  return (
    <div className='flex flex-col w-full max-w-[450px] min-h-screen m-auto p-4 bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col flex-1 gap-2'>
        {header && (
          <header className='flex items-center justify-between'>
            {header}
          </header>
        )}
        <main className='flex-1 overflow-auto px-2 py-4'>{children}</main>
        {footer && (
          <footer className='mt-4 flex justify-center'>{footer}</footer>
        )}
      </div>
    </div>
  );
};

export default MainLayout;
