import React from "react";
import { Employee } from "../types";
import { Typography, Box, Divider } from "@mui/material";
import EmployeeCard from "./EmployeeCard";

export interface EmployeeListProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onEdit, onDelete }) => (
  <div style={{ height: "100vh" }}>
    <Typography variant="h4" gutterBottom>
      Employee List
    </Typography>
    <Divider sx={{ my: 1 }} />

    <Box sx={{ height: "calc(100vh - 7rem)", overflowY: "auto", pr: 2 }}>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </Box>
  </div>
);

export default EmployeeList;
