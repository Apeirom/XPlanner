'use client';

import { useState, useEffect } from 'react';
import { TrilhaData } from '@/app/trilhas/mockData';
import * as S from './styles';

interface TrilhaCardProps {
  data: TrilhaData; // Renomeei para 'data' para ficar mais genérico
  onClick: () => void;
}

export function TrilhaCard({ data, onClick }: TrilhaCardProps) {
  // Estado local para a animação da barra de progresso deste card específico
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // Effect para disparar a animação após o componente montar
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(data.progress);
    }, 100); // Pequeno delay para garantir que o navegador renderize o 0% antes

    return () => clearTimeout(timer);
  }, [data.progress]);

  return (
    <S.CardContainer
      onClick={onClick}
      $gradient={data.gradient}
    >
      <S.CardContent>
        <S.IconWrapper>{data.iconChar}</S.IconWrapper>
        <S.InfoWrapper>
          <S.CardTitle>{data.title}</S.CardTitle>
          <S.CardProgressText>
            {data.completedSteps} de {data.steps} passos concluídos ({data.progress}%)
          </S.CardProgressText>
          
          {/* Barra de progresso com o valor ANIMADO */}
          <S.ProgressBarContainer>
            <S.ProgressBarFill $percentage={animatedProgress} />
          </S.ProgressBarContainer>

        </S.InfoWrapper>
      </S.CardContent>

      {/* Badges de Status */}
      {data.progress > 0 && data.progress < 100 && (
        <S.StatusBadge>Em progresso</S.StatusBadge>
      )}
      {data.progress === 100 && (
          <S.StatusBadge>Concluído</S.StatusBadge>
      )}
    </S.CardContainer>
  );
}