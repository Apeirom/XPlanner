// 10. Classe: Goal (Modelo de Meta)

import { GoalType, RiskLevel } from './types';

export interface Goal {
  id: string;
  title: string;
  description: string;
  type: GoalType;
  riskLevel: RiskLevel;
  recommendedProducts?: string[];
  iconUrl: string;
  // Relacionamento: userGoals?: UserGoal[];
}