import React from "react";
import { Employee } from "../types";
import BenefitCalculator from "./BenefitCosts";
import { Typography, Divider, List, ListItem, ListItemText, Stack, Card, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EmployeeListProps } from "./EmployeeList";

interface EmployeeCardProps extends Omit<EmployeeListProps, 'employees'> {
  employee: Employee; 
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onEdit, onDelete }) => (
  <Card variant="outlined" sx={{ mt: 2, p: 1 }}>
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
      <Typography variant="h6">{employee.name}</Typography>
      <Stack direction="row" spacing={1}>
        <IconButton edge="end" onClick={() => onEdit(employee)}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" onClick={() => onDelete(employee.id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Stack>

    <Divider sx={{ my: 1 }} />

    {employee.dependents?.length > 0 && (
      <>
        <Typography variant="subtitle1">Dependents:</Typography>
        <List dense disablePadding>
          {employee.dependents.map((dependent) => (
            <ListItem key={dependent.id}>
              <ListItemText primary={dependent.name} />
            </ListItem>
          ))}
        </List>
      </>
    )}

    <BenefitCalculator employee={employee} />
  </Card>
);

export default EmployeeCard;
