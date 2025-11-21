// 14. Classe: Badge
export interface Badge {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  criteria: string;
  // Relacionamentos:
  // challenges?: Challenge[];
  // userBadges?: UserBadge[];
}