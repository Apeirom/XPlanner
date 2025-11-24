// 9. Classe: UserLearningStepProgress (Tabela de Ligação)
export interface UserLearningStepProgress {
  userXPId: string; // FK para UserXP.id
  learningStepId: string; // FK para LearningStep.id
  completedAt: string;
  // Relacionamentos opcionais para facilitar acesso aos objetos completos
  // userXP?: UserXP;
  // learningStep?: LearningStep;
}