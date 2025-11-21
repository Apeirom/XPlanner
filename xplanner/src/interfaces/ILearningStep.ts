// 7. Classe: LearningStep

import { LearningContentType } from './types';

export interface LearningStep {
  id: string;
  learningPathId: string; // FK para LearningPath.id
  order: number;
  title: string;
  type: LearningContentType;
  xpContentUrl?: string;
  estimatedMinutes?: number;
  quizContentId?: string; // FK para QuizContent.id
  // Relacionamentos:
  // learningPath?: LearningPath;
  // quizContent?: QuizContent; (Carregado se type === "QUIZ")
}