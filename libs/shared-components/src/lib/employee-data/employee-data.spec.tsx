import { render } from '@testing-library/react';

import EmployeeData from './employee-data';

describe('EmployeeData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeData />);
    expect(baseElement).toBeTruthy();
  });
});
