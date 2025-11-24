// Interfaces para os dados financeiros
export interface FinancialSummaryData {
  income: number;
  expense: number;
  balance: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

export interface Goal {
  id: string;
  name: string;
}

// Dados Mockados
export const mockFinancialSummary: FinancialSummaryData = {
  income: 5200.00,
  expense: 3150.50,
  balance: 2049.50,
};

export const mockTransactions: Transaction[] = [
  { id: 't1', date: '2023-11-01', description: 'Salário', category: 'Renda', amount: 5000.00, type: 'income' },
  { id: 't2', date: '2023-11-05', description: 'Aluguel', category: 'Moradia', amount: 1500.00, type: 'expense' },
  { id: 't3', date: '2023-11-10', description: 'Supermercado', category: 'Alimentação', amount: 450.75, type: 'expense' },
  { id: 't4', date: '2023-11-15', description: 'Ainda Não Nomeado', category: 'Não Categorizado', amount: 200.00, type: 'income' },
  { id: 't5', date: '2023-11-20', description: 'Ainda Não Nomeado', category: 'Não Categorizado', amount: 120.00, type: 'expense' },
  { id: 't6', date: '2023-11-25', description: 'Ainda Não Nomeado', category: 'Não Categorizado', amount: 80.00, type: 'expense' },
  
  // Adicione mais transações para testar a rolagem...
];

export const mockGoals: Goal[] = [
  { id: 'g1', name: 'Viagem para o Japão' },
  { id: 'g2', name: 'Entrada na Casa Própria' },
  { id: 'g3', name: 'Trocar de Carro' },
];

// Interface e dados mockados para o Score (para reutilizar o ScoreOverviewCard)
export interface ScoreData {
  score: number;
  maxScore: number;
  level: number;
  title: string;
  pointsThisMonth: number;
}

export const mockScoreData: ScoreData = {
  score: 650,
  maxScore: 1000,
  level: 3,
  title: 'Novato Financeiro',
  pointsThisMonth: 45,
};