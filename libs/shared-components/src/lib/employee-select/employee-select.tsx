import styles from './employee-select.module.scss';

/* eslint-disable-next-line */
export interface EmployeeSelectProps {}

export function EmployeeSelect(props: EmployeeSelectProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to EmployeeSelect!</h1>
    </div>
  );
}

export default EmployeeSelect;
