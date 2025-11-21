// 12. Classe: Challenge

import { ChallengeType } from './types';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  challengeType: ChallengeType;
  durationDays: number;
  xpPointsReward: number;
  xpCoinsReward?: number;
  badgeId?: string; // FK para Badge.id
  iconUrl: string;
  // Relacionamentos:
  // badge?: Badge;
  // userProgress?: UserChallengeProgress[];
}