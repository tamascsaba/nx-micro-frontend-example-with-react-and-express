import styles from './app.module.scss';
import {Suspense, lazy} from 'react';

const Data = lazy(() => import('data/Module'));
const Filter = lazy(() => import('filter/Module'));

export function App() {
  return (
    <>
      <h1>Hello <span role="img" aria-label="wave icon">👋</span></h1>
      <Suspense fallback={null}>
        <div className={styles['app-wrapper']}>
          <div className={styles['app']}>
            <Filter />
          </div>
          <div className={styles['app']}>
            <Data />
          </div>
        </div>
      </Suspense>
    </>

  );
}

export default App;
