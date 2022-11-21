import {useEffect, useState} from 'react';
import { useStore } from '@nanostores/react';
import {selectedEmployee} from '@lib/shared-stores';
import {Spinner} from '@lib/shared-components';

import styles from './employee-data.module.scss';

async function getEmployee(name: string) {
  const res = await fetch('http://localhost:3001/api/employee-data?employee=' + name);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export function EmployeeData() {
  const [employee, setEmployee] = useState(null);
  const [status, setStatus] = useState({error: '', success: false, isLoading: false});
  const $selectedEmployee = useStore(selectedEmployee);

  useEffect(() => {
    (async function() {
      setStatus({error: '', success: false, isLoading: true})
      const data = await getEmployee($selectedEmployee);

      setEmployee(data);
      setStatus({error: '', success: true, isLoading: false});
    })();
  }, [$selectedEmployee]);

  return (
    <div className={styles['container']}>
      {status.isLoading && <Spinner/>}
      <pre>
        {JSON.stringify(employee, null, 2)}
      </pre>
    </div>
  );
}
