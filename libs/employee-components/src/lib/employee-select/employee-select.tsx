import styles from './employee-select.module.scss';
import {useEffect, useState} from 'react';

import {selectedEmployee} from '@lib/shared-stores';
import {Spinner} from '@lib/shared-components';

async function getEmployees() {
  const res = await fetch('http://localhost:3002/api/employees');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function kebabCase(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export function EmployeeSelect() {
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState({error: '', success: false, isLoading: false});

  useEffect(() => {
    (async function() {
      setStatus({error: '', success: false, isLoading: true})
      const data = await getEmployees();

      setEmployees(data);
      selectedEmployee.set(kebabCase(data[0]));
      setStatus({error: '', success: true, isLoading: false});
    })();
  }, []);

  const selectChange = (value: string) => {
    selectedEmployee.set(kebabCase(value));
  }

  return (
    <div className={styles['container']}>
      {status.isLoading && <Spinner/>}
      <select onChange={(e) => selectChange(e.target.value)}>
        {employees?.map((employee: string, i: number) => <option key={i}>{employee}</option>)}
      </select>
    </div>
  );
}
