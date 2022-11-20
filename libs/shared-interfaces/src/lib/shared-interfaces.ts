export interface Employee {
  firstName: string;
  lastName: string;
  age: number;
  compensation: number;
  salary: Array<{ year: number, value: number }>;
}
