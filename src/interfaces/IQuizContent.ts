// 8. Classe: QuizContent (Aulas/Jogos)
export interface QuizContent {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
  xpPointsReward: number;
  xpCoinsReward?: number;
  // Relacionamento: learningStep?: LearningStep;
}