import {useEffect, useState} from 'react';

import styles from './employee-data.module.scss';
import Spinner from '../spinner/spinner';

async function getEmployee() {
  const res = await fetch('http://localhost:3001/api/user-data');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export function EmployeeData() {
  const [employee, setEmployee] = useState(null);
  const [status, setStatus] = useState({error: '', success: false, isLoading: false});


  useEffect(() => {
    const loadData = async () => {
      setStatus({error: '', success: false, isLoading: true})
      const data = await getEmployee();
      setEmployee(data);
      setStatus({error: '', success: true, isLoading: false});
    };
    void loadData();
  }, []);

  return (
    <div className={styles['container']}>
      {status.isLoading && <Spinner/>}
      <pre>
        {JSON.stringify(employee, null, 2)}
      </pre>
    </div>
  );
}

export default EmployeeData;
