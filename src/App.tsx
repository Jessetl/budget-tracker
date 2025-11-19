function App() {
  return (
    <div className='flex items-center justify-center phone-frame'>
      <div className='flex flex-col'>
        <header className='flex items-center justify-between mb-4'>
          <div className='w-10 h-10 bg-gray-200 rounded-full' />
          <div className='text-sm text-gray-500'>
            Simulación Teléfono — 450px max
          </div>
        </header>

        <main className='flex-1 overflow-auto px-2 py-4'>
          <div className='space-y-3'>
            <div className='h-4 bg-gray-100 rounded w-3/4' />
            <div className='h-4 bg-gray-100 rounded w-1/2' />
            <div className='h-3 bg-gray-100 rounded w-5/6' />
            <div className='h-40 bg-gradient-to-r from-purple-100 to-pink-100 rounded' />
          </div>
        </main>

        <footer className='mt-4 flex justify-center'>
          <button className='px-4 py-2 bg-blue-600 text-white rounded'>
            Acción
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
