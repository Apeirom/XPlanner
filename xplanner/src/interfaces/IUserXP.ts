// 2. Classe: UserXP
export interface UserXP {
  id: string;
  userId: string; // FK para User.id
  username: string;
  birthYear: number;
  avatarUrl: string;
  totalXp: number;
  currentLevel: string;
  xpToNextLevel: number;
  dayStreak: number;
  xpCoinsBalance: number;
  // Relacionamentos (Opcionais no frontend, carregados sob demanda):
  // financialProfile?: FinancialProfile;
  // learningProgress?: UserLearningStepProgress[];
  // goals?: UserGoal[];
  // challengeProgress?: UserChallengeProgress[];
  // badges?: UserBadge[];
}