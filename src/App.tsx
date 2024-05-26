import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import { Employee } from "./types";
import { getEmployees, addEmployee, updateEmployee } from "./services/mockApi";
import { Container } from "@mui/material";

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    getEmployees().then(setEmployees);
  }, []);

  const handleSave = (newEmployee: Employee) => {
    addEmployee(newEmployee).then((savedEmployee) => {
      setEmployees([savedEmployee, ...employees]);
    });
  };

  const handleUpdate = (updatedEmployee: Employee) => {
    updateEmployee(updatedEmployee).then(() => {
      setEmployees(employees.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
      setSelectedEmployee(null);
    });
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = (id: number) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <EmployeeForm onSave={handleSave} onUpdate={handleUpdate} employee={selectedEmployee} />
        <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default App;
