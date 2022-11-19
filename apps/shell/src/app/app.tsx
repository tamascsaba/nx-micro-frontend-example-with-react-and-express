import * as React from 'react';

const Data = React.lazy(() => import('data/Module'));

const Filter = React.lazy(() => import('filter/Module'));

export function App() {
  return (
    <>
      <h1>Hello <span role="img" aria-label="wave icon">👋</span></h1>
      <React.Suspense fallback={null}>
        <Data />
        <Filter />
      </React.Suspense>
    </>

  );
}

export default App;
