// src/app/metas/mockData.ts

// --- Tipos ---

export interface GoalDataType {
  title: string;
  tags: string[];
  currentAmount: number;
  targetAmount: number;
  progress: number;
  monthsLeft: number;
  recommendedDeposit: number;
  strategyTags: string[];
  products: string[];
}

export interface ArticleType {
  id: number;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  tagColor: 'purple' | 'gold';
}

// --- Dados Mockados (Traduzidos) ---

export const mockGoalData: GoalDataType = {
  title: 'Viagem para o Japão',
  tags: ['Curto prazo', 'Baixo risco'],
  currentAmount: 8200,
  targetAmount: 15000,
  progress: 55,
  monthsLeft: 18,
  recommendedDeposit: 380,
  strategyTags: ['Alta liquidez', 'Renda fixa', 'CDB 100% CDI'],
  products: ['Tesouro Selic', 'CDB Liquidez Diária', 'Fundo DI']
};

export const mockArticlesData: ArticleType[] = [
  {
    id: 1,
    title: 'Como começar a investir com R$ 50',
    description: 'Aprenda sobre micro-investimentos e como começar com pouco.',
    readTime: '5 min de leitura',
    tag: 'Iniciante',
    tagColor: 'purple'
  },
  {
    id: 2,
    title: 'O que é reserva de emergência?',
    description: 'Entenda por que todos precisam de uma rede de segurança financeira.',
    readTime: '7 min de leitura',
    tag: 'Essencial',
    tagColor: 'gold'
  },
  {
    id: 3,
    title: 'Entendendo o risco nos investimentos',
    description: 'Como equilibrar risco e retorno com base nos seus objetivos.',
    readTime: '10 min de leitura',
    tag: 'Intermediário',
    tagColor: 'purple'
  },
];