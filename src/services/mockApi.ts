import { Employee } from "../types";

let employees: Employee[] = [
  {
    id: 1,
    name: "Alice",
    dependents: [{ id: 4, name: "Bob" }],
  },
  {
    id: 2,
    name: "Charlie",
    dependents: [],
  },
  {
    id: 3,
    name: "Lex",
    dependents: [],
  },
];

export const getEmployees = () => Promise.resolve(employees);

export const addEmployee = (employee: Employee) => {
  employee.id = Date.now();
  employees = [...employees, employee];
  return Promise.resolve(employee);
};

export const updateEmployee = (employee: Employee) => {
  employees = employees.map((e) => (e.id === employee.id ? employee : e));
  return Promise.resolve(employee);
};

export const deleteEmployee = (id: number) => {
  employees = employees.filter((e) => e.id !== id);
  return Promise.resolve();
};
