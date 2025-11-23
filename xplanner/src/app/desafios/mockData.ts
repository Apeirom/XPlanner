// --- Tipos para a funcionalidade de Desafios ---
// Define a estrutura básica de um desafio (usado para tipagem e mock dos componentes)

export type ChallengeType = "DAILY" | "WEEKLY" | "MONTHLY";

export interface UserChallengeProgress {
  id: string;
  userXPId: string; // FK para UserXP.id
  challengeId: string; // FK para Challenge.id
  startDate: string;
  endDate: string;
  currentProgress: number; // 0 - 100
  isCompleted: boolean; // true => desafio concluído
  completedAt?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  challengeType: ChallengeType;
  durationDays: number;
  xpPointsReward: number; // XP ganho ao completar
  xpCoinsReward?: number; // BTC ganho (padrão em fração, ex: 0.0001)
  badgeId?: string; // FK para Badge.id
  iconUrl: string;
  userProgress?: UserChallengeProgress[];
}

// --- Mock genérico de desafios (Diários / Semanais) para progresso do usuário 
// Usado apenas localmente para popular a interface até integrar com backend

const generateProgress = (challengeId: string, completed = false): UserChallengeProgress[] => {
  return [
    {
      id: `${challengeId}-progress`,
      userXPId: "user-001",
      challengeId,
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      currentProgress: completed ? 100 : Math.floor(Math.random() * 100),
      isCompleted: completed,
      completedAt: completed ? "2025-02-15" : undefined
    }
  ];
};

export const dailyChallenges: Challenge[] = [
  {
    id: "d1",
    title: "Registrar despesas de hoje",
    description: "Anote seus gastos para manter o controle diário.",
    challengeType: "DAILY",
    durationDays: 1,
    xpPointsReward: 40,
    xpCoinsReward: 5,
    iconUrl: "/icons/fire.png",
    userProgress: generateProgress("d1", false)
  },
  {
    id: "d2",
    title: "Ler um artigo financeiro",
    description: "Escolha um artigo da área de investimentos.",
    challengeType: "DAILY",
    durationDays: 1,
    xpPointsReward: 25,
    xpCoinsReward: 3,
    iconUrl: "/icons/book.png",
    userProgress: generateProgress("d2", true)
  }
];

export const weeklyChallenges: Challenge[] = [
  {
    id: "w1",
    title: "Atualizar seu score financeiro",
    description: "Refaça o quiz semanal e ganhe XP extra.",
    challengeType: "WEEKLY",
    durationDays: 7,
    xpPointsReward: 120,
    xpCoinsReward: 15,
    iconUrl: "/icons/trophy.png",
    userProgress: generateProgress("w1", false)
  },
  {
    id: "w2",
    title: "Reduzir gastos em uma categoria",
    description: "Escolha uma categoria e reduza ao menos 10%.",
    challengeType: "WEEKLY",
    durationDays: 7,
    xpPointsReward: 80,
    xpCoinsReward: 10,
    iconUrl: "/icons/chart.png",
    userProgress: generateProgress("w2", false)
  }
];
