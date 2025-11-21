// 13. Classe: UserChallengeProgress (Tabela de Ligação)
export interface UserChallengeProgress {
  id: string;
  userXPId: string; // FK para UserXP.id
  challengeId: string; // FK para Challenge.id
  startDate: string;
  endDate: string; 
  currentProgress: number;
  isCompleted: boolean;
  completedAt?: string;
  // Relacionamentos opcionais
  // userXP?: UserXP;
  // challenge?: Challenge;
}