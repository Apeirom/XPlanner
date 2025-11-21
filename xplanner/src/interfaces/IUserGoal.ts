// 11. Classe: UserGoal (Meta do Usuário)
export interface UserGoal {
  id: string;
  userXPId: string; // FK para UserXP.id
  goalId?: string; // FK para Goal.id (Opcional)
  customTitle: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  recommendedMonthlyDeposit: number;
  progressPercent: number;
  isActive: boolean;
  xpCoinsRewardOnCompletion?: number;
  // Relacionamentos:
  // userXP?: UserXP;
  // goalModel?: Goal; (O objeto Goal completo, se houver)
}