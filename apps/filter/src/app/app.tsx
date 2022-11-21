import './app.module.scss';

import {EmployeeSelect} from '@lib/employee-components';

export default function App() {
  return (
    <>
      <h3>Filter Application</h3>
      <EmployeeSelect />
    </>
  );
}
