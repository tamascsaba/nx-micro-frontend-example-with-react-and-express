import styles from './employee-select.module.scss';

/* eslint-disable-next-line */
export interface EmployeeSelectProps {}

async function getData() {
  const res = await fetch('http://localhost:3002/api/users');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export function EmployeeSelect(props: EmployeeSelectProps) {
  return (
    <div className={styles['container']}>
      <h4>employeeSelect!</h4>
    </div>
  );
}

export default EmployeeSelect;
