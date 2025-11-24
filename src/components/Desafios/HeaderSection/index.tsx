'use client';

import { Flame, Trophy } from 'lucide-react';
import * as S from './styles';

interface HeaderSectionProps {
  activeTab: 'DAILY' | 'WEEKLY';
  onTabChange: (tab: 'DAILY' | 'WEEKLY') => void;
}

export function HeaderSection({ activeTab, onTabChange }: HeaderSectionProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.TitleContainer>
          <S.Title>Desafios</S.Title>
          <S.Subtitle>Complete missões e ganhe recompensas exclusivas.</S.Subtitle>
        </S.TitleContainer>
        <S.TrophyIcon>🏆</S.TrophyIcon>
      </S.HeaderContent>

      <S.TabsContainer>
        <S.TabButton
          $active={activeTab === 'DAILY'}
          onClick={() => onTabChange('DAILY')}
        >
          <Flame size={20} />
          Diários
        </S.TabButton>
        <S.TabButton
          $active={activeTab === 'WEEKLY'}
          onClick={() => onTabChange('WEEKLY')}
        >
          <Trophy size={20} />
          Semanais
        </S.TabButton>
      </S.TabsContainer>
    </S.HeaderContainer>
  );
}