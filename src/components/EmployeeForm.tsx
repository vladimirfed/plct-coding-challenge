import React, { useEffect, useState } from "react";
import { Employee, Dependent } from "../types";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  FormGroup,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface EmployeeFormProps {
  onSave: (employee: Employee) => void;
  onUpdate: (employee: Employee) => void;
  employee: Employee | null;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSave, onUpdate, employee }) => {
  const [employeeName, setName] = useState("");
  const [dependents, setDependents] = useState<Dependent[]>([]);
  const [dependentName, setDependentName] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setDependents(employee.dependents);
    } else {
      setName("");
      setDependents([]);
    }
  }, [employee]);

  const handleAddDependent = () => {
    if (!dependentName) return;
    const newDependent = { id: Date.now(), name: dependentName };
    setDependents([...dependents, newDependent]);
    setDependentName("");
  };

  const handleEditDependent = (dep: Dependent) => {
    handleDeleteDependent(dep.id);
    setDependentName(dep.name);
  };

  const handleDeleteDependent = (id: number) => {
    setDependents(dependents.filter((dependent) => dependent.id !== id));
  };

  const handleSave = () => {
    if (employee) {
      const updatedEmployee = { ...employee, name: employeeName, dependents };
      onUpdate(updatedEmployee);
    } else {
      const newEmployee = { id: 0, name: employeeName, dependents };
      onSave(newEmployee);
    }
    setName("");
    setDependents([]);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {employee ? "Edit Employee" : "Add Employee"}
      </Typography>
      <Divider sx={{ my: 1 }} />

      <TextField
        label="Employee Name"
        value={employeeName}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        fullWidth
      />
      <Typography variant="h6">Dependents:</Typography>
      <FormGroup row>
        <TextField label="Dependent Name" value={dependentName} onChange={(e) => setDependentName(e.target.value)} />
        <Button onClick={handleAddDependent} variant="outlined" color="primary" disabled={!dependentName}>
          + dependent
        </Button>
      </FormGroup>
      <List>
        {dependents.map((dependent) => (
          <ListItem
            key={dependent.id}
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => handleEditDependent(dependent)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDeleteDependent(dependent.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={dependent.name} />
          </ListItem>
        ))}
      </List>
      <Button onClick={handleSave} variant="contained" color="primary" sx={{ mt: 2 }} disabled={!employeeName}>
        Submit
      </Button>
    </div>
  );
};

export default EmployeeForm;
