'use client';

import { Flame } from 'lucide-react';
import * as S from './styles';

interface UserProfileHeaderProps {
  level: number;
  title: string;
  currentXP: number;
  nextLevelXP: number;
  streakDays: number;
  avatarEmoji?: string; // Opcional, pode ser substituído por uma imagem depois
}

export function UserProfileHeader({
  level = 3,
  title = 'Money Rookie',
  currentXP = 2340,
  nextLevelXP = 3000,
  streakDays = 7,
  avatarEmoji = '🦊',
}: UserProfileHeaderProps) {
  // Calcula a porcentagem de progresso
  const progressPercentage = (currentXP / nextLevelXP) * 100;

  return (
    <S.Container>
      <S.HeaderContent>
        <S.AvatarWrapper>
          <S.AvatarContainer>
            <span className="emoji">{avatarEmoji}</span>
          </S.AvatarContainer>
          <S.LevelBadge>
            <span>{level}</span>
          </S.LevelBadge>
        </S.AvatarWrapper>

        <S.UserInfo>
          <S.TopInfo>
            <div>
              <S.LevelText>Nível {level}</S.LevelText>
              <S.TitleText>{title}</S.TitleText>
            </div>
            
            <S.StreakBadge>
              <Flame className="w-5 h-5 text-orange-500" />
              <span>{streakDays}</span>
            </S.StreakBadge>
          </S.TopInfo>
          
          <S.ProgressWrapper>
            <S.ProgressLabels>
              <span className="current">{currentXP.toLocaleString()} XP</span>
              <span className="next">{nextLevelXP.toLocaleString()} XP</span>
            </S.ProgressLabels>
            {/* Usando o componente Progress do shadcn/ui ou similar, estilizado */}
            <S.StyledProgress value={progressPercentage} />
          </S.ProgressWrapper>
        </S.UserInfo>
      </S.HeaderContent>
    </S.Container>
  );
}