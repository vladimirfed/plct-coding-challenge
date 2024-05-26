// src/types.ts
export interface Dependent {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  name: string;
  dependents: Dependent[];
}

export interface BenefitCost {
  employeeCost: number;
  dependentsCost: number;
  totalCost: number;
}
