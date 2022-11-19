import styles from './employee-data.module.scss';

/* eslint-disable-next-line */
export interface EmployeeDataProps {}

export function EmployeeData(props: EmployeeDataProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EmployeeData!</h1>
    </div>
  );
}

export default EmployeeData;
