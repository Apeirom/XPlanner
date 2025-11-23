// src/app/desafios/mockData.ts

// Definindo tipos baseados nas suas classes para uso no frontend
export interface Challenge {
  id: string;
  title: string;
  description: string;
  challengeType: 'DAILY' | 'WEEKLY' | 'MONTHLY';
  durationDays: number; // Total a ser alcançado
  xpPointsReward: number;
  xpCoinsReward?: number;
  iconUrl: string; // Pode ser um emoji ou URL
  // Simulação do progresso do usuário para este desafio
  userProgress?: {
    currentProgress: number;
    isCompleted: boolean;
    isClaimed: boolean; // Campo adicional para controle de UI (reivindicado)
  };
}

// --- MOCK DATA (Adaptado) ---

export const dailyChallengesMock: Challenge[] = [
  {
    id: 'd1',
    title: 'Login Streak',
    description: 'Entre no app hoje',
    challengeType: 'DAILY',
    durationDays: 1,
    xpPointsReward: 50,
    xpCoinsReward: 0.0001,
    iconUrl: '🔥',
    userProgress: {
      currentProgress: 1,
      isCompleted: true,
      isClaimed: false,
    },
  },
  {
    id: 'd2',
    title: 'Quiz do Dia',
    description: 'Complete um quiz de finanças',
    challengeType: 'DAILY',
    durationDays: 1,
    xpPointsReward: 100,
    xpCoinsReward: 0.0002,
    iconUrl: '🎯',
    userProgress: {
      currentProgress: 1,
      isCompleted: true,
      isClaimed: false,
    },
  },
  {
    id: 'd3',
    title: 'Atualize o Orçamento',
    description: 'Registre uma transação',
    challengeType: 'DAILY',
    durationDays: 1,
    xpPointsReward: 75,
    xpCoinsReward: 0.0001,
    iconUrl: '💰',
    userProgress: {
      currentProgress: 0,
      isCompleted: false,
      isClaimed: false,
    },
  },
];

export const weeklyChallengesMock: Challenge[] = [
  {
    id: 'w1',
    title: '7 Dias Sem Delivery',
    description: 'Cozinhe em casa todos os dias',
    challengeType: 'WEEKLY',
    durationDays: 7,
    xpPointsReward: 500,
    xpCoinsReward: 0.001,
    iconUrl: '🍳',
    userProgress: {
      currentProgress: 7,
      isCompleted: true,
      isClaimed: false,
    },
  },
  {
    id: 'w2',
    title: 'Complete 3 Trilhas',
    description: 'Finalize 3 passos de trilhas',
    challengeType: 'WEEKLY',
    durationDays: 3,
    xpPointsReward: 300,
    xpCoinsReward: 0.0005,
    iconUrl: '📚',
    userProgress: {
      currentProgress: 2,
      isCompleted: false,
      isClaimed: false,
    },
  },
  {
    id: 'w3',
    title: 'Meta Semanal',
    description: 'Adicione R$100 a uma meta',
    challengeType: 'WEEKLY',
    durationDays: 3,
    xpPointsReward: 400,
    xpCoinsReward: 0.0008,
    iconUrl: '🎯',
    userProgress: {
      currentProgress: 3,
      isCompleted: true,
      isClaimed: false,
    },
  },
];