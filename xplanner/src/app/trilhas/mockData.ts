import { BookOpen, FileText, Play, Video } from 'lucide-react';

export type StepType = 'video' | 'article' | 'quiz';

export interface StepDetail {
  id: number;
  title: string;
  type: StepType;
  completed: boolean;
  xp: number;
}

export interface TrilhaData {
  id: number;
  title: string;
  description: string;
  progress: number;
  steps: number;
  completedSteps: number;
  // Usaremos strings de gradiente CSS direto
  gradient: string; 
  iconChar: string;
  stepsDetail: StepDetail[];
}

export const mockTrilhas: TrilhaData[] = [
  {
    id: 1,
    title: 'Saindo das Dívidas',
    description: 'Organize suas finanças e se livre das dívidas.',
    progress: 60,
    steps: 5,
    completedSteps: 3,
    // Gradiente Laranja/Vermelho XP
    gradient: 'linear-gradient(135deg, #ff5e00, #ff0000)', 
    iconChar: '🎯',
    stepsDetail: [
      { id: 1, title: 'O que são juros?', type: 'video', completed: true, xp: 100 },
      { id: 2, title: 'Mapeando suas dívidas', type: 'article', completed: true, xp: 100 },
      { id: 3, title: 'Quiz: Estratégias', type: 'quiz', completed: true, xp: 100 },
      { id: 4, title: 'Método bola de neve', type: 'video', completed: false, xp: 150 },
      { id: 5, title: 'Renegociação', type: 'article', completed: false, xp: 200 },
    ]
  },
  {
    id: 2,
    title: 'Primeiros Investimentos',
    description: 'Faça seu dinheiro trabalhar para você.',
    progress: 25,
    steps: 8,
    completedSteps: 2,
    // Gradiente Verde
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    iconChar: '📈',
    stepsDetail: [
      { id: 1, title: 'Por que investir?', type: 'video', completed: true, xp: 50 },
      { id: 2, title: 'Perfil de investidor', type: 'quiz', completed: true, xp: 50 },
      { id: 3, title: 'Tesouro Direto 101', type: 'article', completed: false, xp: 100 },
      { id: 4, title: 'CDB e LCI', type: 'video', completed: false, xp: 100 },
      { id: 5, title: 'Quiz: Renda Fixa', type: 'quiz', completed: false, xp: 100 },
      { id: 6, title: 'Ações para iniciantes', type: 'video', completed: false, xp: 150 },
      { id: 7, title: 'Fundos de Investimento', type: 'article', completed: false, xp: 150 },
      { id: 8, title: 'Quiz Final', type: 'quiz', completed: false, xp: 300 },
    ]
  },
  {
    id: 3,
    title: 'Orçamento na Veia',
    description: 'Controle total sobre entradas e saídas.',
    progress: 0,
    steps: 6,
    completedSteps: 0,
    // Gradiente Azul
    gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    iconChar: '💸',
    stepsDetail: [
      { id: 1, title: 'Receitas vs Despesas', type: 'video', completed: false, xp: 50 },
      { id: 2, title: 'Criando seu orçamento', type: 'article', completed: false, xp: 100 },
      { id: 3, title: 'Quiz: Gastos fixos', type: 'quiz', completed: false, xp: 50 },
      { id: 4, title: 'Cortando gastos', type: 'video', completed: false, xp: 100 },
      { id: 5, title: 'Poupança automática', type: 'article', completed: false, xp: 150 },
      { id: 6, title: 'Quiz Final', type: 'quiz', completed: false, xp: 200 },
    ]
  },
];

// Helper para pegar o ícone correto baseado no tipo
export const getStepIcon = (type: StepType) => {
  switch (type) {
    case 'video': return Video;
    case 'article': return FileText;
    case 'quiz': return Play;
    default: return BookOpen;
  }
};