// 5. Classe: QuizOption (Diagnóstico)
export interface QuizOption {
  id: string;
  quizQuestionId: string; // FK para QuizQuestion.id
  label: string;
  weight: number;
  // Relacionamento: question?: QuizQuestion;
}