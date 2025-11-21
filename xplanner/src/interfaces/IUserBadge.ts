// 15. Classe: UserBadge (Tabela de Ligação)
export interface UserBadge {
  userXPId: string; // FK para UserXP.id
  badgeId: string; // FK para Badge.id
  awardedAt: string;
  // Relacionamentos opcionais
  // userXP?: UserXP;
  // badge?: Badge;
}