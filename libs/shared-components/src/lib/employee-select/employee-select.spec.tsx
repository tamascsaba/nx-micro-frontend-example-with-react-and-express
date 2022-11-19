import { render } from '@testing-library/react';

import EmployeeSelect from './employee-select';

describe('EmployeeSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeSelect />);
    expect(baseElement).toBeTruthy();
  });
});
