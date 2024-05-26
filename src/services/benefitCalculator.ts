import { Employee, BenefitCost } from "../types";

const BENEFIT_COST_EMPLOYEE = 1000;
const BENEFIT_COST_DEPENDENT = 500;
const PAYCHECKS_PER_YEAR = 26;

export const calculateBenefitCost = (employee: Employee): BenefitCost => {
  const getFinalCost = (name: string, initialCost: number) =>
    name.toLocaleLowerCase().startsWith("a") ? initialCost * 0.9 : initialCost;

  const employeeCost = getFinalCost(employee.name, BENEFIT_COST_EMPLOYEE);
  const dependentsCost = employee.dependents.reduce(
    (acc, dep) => acc + getFinalCost(dep.name, BENEFIT_COST_DEPENDENT),
    0
  );
  const totalCost = employeeCost + dependentsCost;

  return {
    employeeCost: employeeCost / PAYCHECKS_PER_YEAR,
    dependentsCost: dependentsCost / PAYCHECKS_PER_YEAR,
    totalCost: totalCost / PAYCHECKS_PER_YEAR,
  };
};
