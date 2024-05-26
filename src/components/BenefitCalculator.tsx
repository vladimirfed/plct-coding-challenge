import React from "react";
import { Employee } from "../types";
import { calculateBenefitCost } from "../services/benefitCalculator";

interface BenefitCalculatorProps {
  employee: Employee;
}

const BenefitCalculator: React.FC<BenefitCalculatorProps> = ({ employee }) => {
  const { employeeCost, dependentsCost: dependentCost, totalCost } = calculateBenefitCost(employee);

  return (
    <div>
      <h4>Benefit Costs</h4>
      <p>Employee Cost: ${employeeCost.toFixed(2)} per paycheck</p>
      <p>Dependent Cost: ${dependentCost.toFixed(2)} per paycheck</p>
      <p>Total Cost: ${totalCost.toFixed(2)} per paycheck</p>
    </div>
  );
};

export default BenefitCalculator;
