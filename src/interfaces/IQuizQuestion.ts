// 4. Classe: QuizQuestion (Diagnóstico)

import { FinancialDimension } from './types';

export interface QuizQuestion {
  id: string;
  text: string;
  dimension: FinancialDimension;
  order: number;
  // Relacionamento: options?: QuizOption[]; (Geralmente carregado junto para exibir o quiz)
}