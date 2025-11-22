// src/app/home/mockData.ts

// --- Interfaces (Tipos) ---

export interface UserDataType {
  name: string;
  score: number;
  level: number;
  levelTitle: string; // Traduzido: "Money Rookie" -> "Novato Financeiro"
  pointsChanged: number;
  btcBalance: number; // Movendo o saldo de BTC para cá também
}

// Tipo para os itens da barra lateral direita
export interface QuickActionType {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  // Adicionamos uma variante para saber qual estilo de botão usar
  buttonVariant: 'primary' | 'secondary';
}

// --- Dados Mockados (Traduzidos) ---

export const mockUserData: UserDataType = {
  name: 'João',
  score: 685,
  level: 4,
  levelTitle: 'Novato Financeiro',
  pointsChanged: 45,
  btcBalance: 0.005,
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