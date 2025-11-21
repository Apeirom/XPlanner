'use client';

import { TrilhaData } from '@/app/trilhas/mockData';
import * as S from './styles';

interface TrilhaListProps {
  trilhas: TrilhaData[];
  onSelectTrilha: (id: number) => void;
}

export function TrilhaList({ trilhas, onSelectTrilha }: TrilhaListProps) {
  return (
    <S.ListContainer>
      {trilhas.map((trilha) => (
        <S.TrilhaCard 
          key={trilha.id} 
          onClick={() => onSelectTrilha(trilha.id)}
          $gradient={trilha.gradient} // Passa o gradiente como prop pro styled
        >
          <S.CardContent>
            <S.IconWrapper>{trilha.iconChar}</S.IconWrapper>
            <S.InfoWrapper>
              <S.CardTitle>{trilha.title}</S.CardTitle>
              <S.CardProgressText>
                {trilha.completedSteps} de {trilha.steps} passos concluídos ({trilha.progress}%)
              </S.CardProgressText>
              
              {/* Barra de progresso customizada */}
              <S.ProgressBarContainer>
                <S.ProgressBarFill $percentage={trilha.progress} />
              </S.ProgressBarContainer>

            </S.InfoWrapper>
          </S.CardContent>

          {trilha.progress > 0 && trilha.progress < 100 && (
            <S.StatusBadge>Em progresso</S.StatusBadge>
          )}
          {trilha.progress === 100 && (
             <S.StatusBadge>Concluído</S.StatusBadge>
          )}
        </S.TrilhaCard>
      ))}
    </S.ListContainer>
  );
}