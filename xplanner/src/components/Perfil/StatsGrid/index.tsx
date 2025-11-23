'use client';

// Importa a interface da prop
import { StatsGridProps } from '@/app/perfil/mockData';
import * as S from './styles';

// O componente agora recebe 'stats' via props
export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <S.GridContainer>
      {stats.map((stat) => {
        // O 'Icon' agora já vem tipado corretamente como LucideIcon
        const Icon = stat.icon;
        return (
          <S.StatCard key={stat.label}>
            <S.StatHeader>
              <Icon size={16} color={stat.color} />
              <S.StatLabel>{stat.label}</S.StatLabel>
            </S.StatHeader>
            <S.StatValue>{stat.value}</S.StatValue>
          </S.StatCard>
        );
      })}
    </S.GridContainer>
  );
}