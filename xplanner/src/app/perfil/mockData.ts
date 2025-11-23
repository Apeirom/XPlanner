// src/app/perfil/mockData.ts
import { Trophy, Flame, Zap, Award, Shield, Target, Crown, Star, LucideIcon } from 'lucide-react';

// --- Tipos baseados nas suas classes (UserXP, Badge, UserBadge) ---

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  title: string;
  level: number;
  totalXp: number;
  streakDays: number;
  avatarUrl: string;
  memberSince: string;
  birthYear: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  // Usando LucideIcon para tipar corretamente os ícones da biblioteca
  iconComponent: LucideIcon; 
  colorGradient: string;
}

export interface UserBadgeStatus {
  badge: Badge;
  isUnlocked: boolean;
  awardedAt?: string;
}

// Novos tipos para os itens de estatística e configuração
export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export interface SettingItemData {
  label: string;
  value: string;
}

// --- Interfaces para as Props dos Componentes ---

export interface ProfileHeaderProps {
  user: UserProfile;
}

export interface StatsGridProps {
  stats: StatItem[];
}

export interface BadgesSectionProps {
  badges: UserBadgeStatus[];
}

export interface SettingsSectionProps {
  settings: SettingItemData[];
  onLogout?: () => void; // Adicionei uma prop opcional para a ação de logout
}

// --- MOCK DATA ---

export const userProfileMock: UserProfile = {
  // ... (dados do perfil)
  id: 'u1',
  name: 'Lucas Mena',
  email: 'lucasmena@email.com',
  title: 'Money Rookie',
  level: 3,
  totalXp: 2340,
  streakDays: 7,
  avatarUrl: '🦊',
  memberSince: 'Nov 2024',
  birthYear: 2004,
};

const badgesDefinitions: Badge[] = [
  // ... (definições das badges)
  { id: 'b1', name: 'Primeira Meta', description: 'Alcançou a primeira meta financeira', iconComponent: Target, colorGradient: 'linear-gradient(to bottom right, #3b82f6, #06b6d4)' },
  { id: 'b2', name: 'Quiz Master', description: 'Acertou todas as perguntas em 5 quizzes', iconComponent: Star, colorGradient: 'linear-gradient(to bottom right, #a855f7, #ec4899)' },
  { id: 'b3', name: 'Semana de Fogo', description: 'Manteve o streak por 7 dias', iconComponent: Flame, colorGradient: 'linear-gradient(to bottom right, #f97316, #ef4444)' },
  { id: 'b4', name: 'Investidor Bronze', description: 'Fez o primeiro investimento', iconComponent: Award, colorGradient: 'linear-gradient(to bottom right, #d97706, #ea580c)' },
  { id: 'b5', name: 'Savings Hero', description: 'Economizou por 3 meses seguidos', iconComponent: Shield, colorGradient: 'linear-gradient(to bottom right, #22c55e, #10b981)' },
  { id: 'b6', name: 'Top 10%', description: 'Está entre os 10% melhores do ranking', iconComponent: Crown, colorGradient: 'linear-gradient(to bottom right, #fbbf24, #eab308)' },
  { id: 'b7', name: 'Mestre das Trilhas', description: 'Completou 3 trilhas de conhecimento', iconComponent: Zap, colorGradient: 'linear-gradient(to bottom right, #06b6d4, #3b82f6)' },
  { id: 'b8', name: 'Influenciador', description: 'Convidou 5 amigos', iconComponent: Trophy, colorGradient: 'linear-gradient(to bottom right, #ec4899, #f43f5e)' },
];

export const userBadgesMock: UserBadgeStatus[] = [
  // ... (badges do usuário)
  { badge: badgesDefinitions[0], isUnlocked: true, awardedAt: '2024-11-10' },
  { badge: badgesDefinitions[1], isUnlocked: true, awardedAt: '2024-11-15' },
  { badge: badgesDefinitions[2], isUnlocked: true, awardedAt: '2024-11-20' },
  { badge: badgesDefinitions[3], isUnlocked: true, awardedAt: '2024-11-22' },
  { badge: badgesDefinitions[4], isUnlocked: true, awardedAt: '2024-11-25' },
  { badge: badgesDefinitions[5], isUnlocked: false },
  { badge: badgesDefinitions[6], isUnlocked: false },
  { badge: badgesDefinitions[7], isUnlocked: false },
];

export const statsMock: StatItem[] = [
  // ... (dados de estatísticas)
  { label: 'Total XP', value: userProfileMock.totalXp.toLocaleString('pt-BR'), icon: Zap, color: '#c084fc' },
  { label: 'Dia de Streak', value: userProfileMock.streakDays.toString(), icon: Flame, color: '#f97316' },
  { label: 'Trilhas Completas', value: '3', icon: Trophy, color: '#4ade80' },
  { label: 'Metas Alcançadas', value: '2', icon: Target, color: '#60a5fa' },
];

export const settingsMock: SettingItemData[] = [
  // ... (dados de configurações)
  { label: 'Email', value: userProfileMock.email },
  { label: 'Ano de Nascimento', value: userProfileMock.birthYear.toString() },
  { label: 'Notificações', value: 'Ativadas' },
  { label: 'Privacidade e Segurança', value: 'Gerenciar dados' },
];