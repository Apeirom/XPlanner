// src/app/home/mockData.ts

// --- Interfaces (Tipos) ---

export interface UserDataType {
  name: string;
  // Dados do Header
  title: string; // Ex: "Novato Financeiro"
  level: number;
  currentXP: number;
  nextLevelXP: number;
  streakDays: number;
  avatarEmoji: string;
  // Dados de Score e Finanças
  hasCompletedQuiz: boolean; 
  score: number;
  pointsChanged: number;
  btcBalance: number;
}

// Tipo para os itens da barra lateral direita
export interface QuickActionType {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

// --- Dados Mockados (Traduzidos) ---

export const mockUserData: UserDataType = {
  name: 'Lucas Mena',
  // Dados do Header
  title: 'Novato Financeiro',
  level: 3,
  currentXP: 2340,
  nextLevelXP: 3000,
  streakDays: 7,
  avatarEmoji: '🦊',
  // Dados de Score e Finanças
  hasCompletedQuiz: true, // <--- Mude aqui para testar (true = dashboard, false = CTA)
  score: 650,
  pointsChanged: 45,
  btcBalance: 5,
};

export const mockQuickActionsData: QuickActionType[] = [
  {
    id: 1,
    title: 'Comece a trilha "Saindo das Dívidas"',
    description: 'Aprenda estratégias para pagar dívidas mais rápido.',
    buttonText: 'Iniciar Trilha',
    buttonVariant: 'primary',
  },
  {
    id: 2,
    title: 'Crie sua primeira meta de reserva de emergência',
    description: 'Construa uma rede de segurança para despesas inesperadas.',
    buttonText: 'Criar Meta',
    buttonVariant: 'primary',
  },
  {
    id: 3,
    title: 'Faça um quiz de 2 minutos para atualizar seu score',
    description: 'Mantenha sua pontuação de saúde financeira precisa.',
    buttonText: 'Fazer Quiz',
    buttonVariant: 'secondary',
  },
];