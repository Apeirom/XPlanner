'use client';

// Importa a interface da prop
import { BadgesSectionProps } from '@/app/perfil/mockData';
import * as S from './styles';

// O componente agora recebe 'badges' via props
export function BadgesSection({ badges }: BadgesSectionProps) {
  const unlockedCount = badges.filter(b => b.isUnlocked).length;
  const totalCount = badges.length;

  return (
    <S.SectionContainer>
      {/* ... (restante do código igual, usando 'badges.map') */}
      <S.SectionHeader>
        <S.SectionTitle>Conquistas</S.SectionTitle>
        <S.BadgeCount>{unlockedCount}/{totalCount}</S.BadgeCount>
      </S.SectionHeader>

      <S.BadgesGrid>
        {badges.map((userBadge) => {
          const { badge, isUnlocked } = userBadge;
          // O 'Icon' já vem tipado
          const Icon = badge.iconComponent;

          return (
            <S.BadgeCard key={badge.id} $isUnlocked={isUnlocked} $gradient={badge.colorGradient}>
              <Icon 
                size={24}
                // Corrigido a prop color que estava hardcoded para string 'white'
                color={isUnlocked ? '#ffffff' : '#52525b'}
                strokeWidth={2.5}
              />
              <S.BadgeName $isUnlocked={isUnlocked}>{badge.name}</S.BadgeName>
            </S.BadgeCard>
          );
        })}
      </S.BadgesGrid>

      <S.InfoBox>
        <p>
          🎯 Faltam 660 XP para desbloquear &quot;Top 10%&quot;
        </p>
      </S.InfoBox>
    </S.SectionContainer>
  );
}