// 3. Classe: FinancialProfile
export interface FinancialProfile {
  id: string;
  userXPId: string; // FK para UserXP.id
  overallScore: number;
  desenrolaScore: number;
  organizaScore: number;
  reservaScore: number;
  investeScore: number;
  lastScoreChange: number;
  hasCompletedOnboarding: boolean;
  lastCalculatedAt: string;
  // Relacionamento: userXP?: UserXP;
}