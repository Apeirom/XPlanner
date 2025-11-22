// src/app/metas/mockData.ts

// --- Tipos ---
export interface GoalDataType {
  id: number; // Adicionado um ID para usar como key no map
  title: string;
  tags: string[];
  currentAmount: number;
  targetAmount: number;
  progress: number;
  monthsLeft: number;
  recommendedDeposit: number;
  strategyTags: string[];
  products: string[];
  icon: 'plane' | 'home' | 'car'; // Adicionei um campo para variar o ícone
}

export interface ArticleType {
  // ... (sem alterações aqui)
  id: number;
  title: string;
  description: string;
  readTime: string;
  tag: string;
  tagColor: 'purple' | 'gold';
}

// --- Dados Mockados (Agora um Array de Metas) ---

export const mockGoals: GoalDataType[] = [
  {
    id: 1,
    title: 'Viagem para o Japão',
    tags: ['Curto prazo', 'Baixo risco'],
    currentAmount: 8200,
    targetAmount: 15000,
    progress: 55,
    monthsLeft: 18,
    recommendedDeposit: 380,
    strategyTags: ['Alta liquidez', 'Renda fixa', 'CDB 100% CDI'],
    products: ['Tesouro Selic', 'CDB Liquidez Diária', 'Fundo DI'],
    icon: 'plane'
  },
  {
    id: 2,
    title: 'Entrada na Casa Própria',
    tags: ['Longo prazo', 'Médio risco'],
    currentAmount: 45000,
    targetAmount: 200000,
    progress: 22.5,
    monthsLeft: 60,
    recommendedDeposit: 2500,
    strategyTags: ['Crescimento', 'Diversificação', 'FIIs & Ações'],
    products: ['Carteira Recomendada XP', 'Fundo Imobiliário XPZY11', 'Tesouro IPCA+'],
    icon: 'home'
  },
  {
    id: 3,
    title: 'Trocar de Carro',
    tags: ['Médio prazo', 'Baixo risco'],
    currentAmount: 15000,
    targetAmount: 80000,
    progress: 18.75,
    monthsLeft: 36,
    recommendedDeposit: 1800,
    strategyTags: ['Renda Fixa', 'Segurança', 'LCI/LCA'],
    products: ['LCA Banco XP', 'CDB Pós-fixado', 'Fundo Renda Fixa Ativo'],
    icon: 'car'
  },
];

// ... (mockArticlesData permanece igual)
export const mockArticlesData: ArticleType[] = [
    // ... seus artigos aqui
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