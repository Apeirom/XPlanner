// 6. Classe: LearningPath
export { FinancialDimension, LearningLevel } from './types';

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  dimension: FinancialDimension;
  level: LearningLevel;
  estimatedMinutes: number;
  imageUrl: string;
  totalSteps: number;
  // Relacionamentos:
  // steps?: LearningStep[]; (Carregado na tela de detalhes da trilha)
  // userProgress?: UserLearningStepProgress[];
}