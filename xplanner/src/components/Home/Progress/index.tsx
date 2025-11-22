'use client';

import * as S from './styles';

interface ProgressProps {
  value: number; // Valor atual (ex: 50)
  max?: number;  // Valor máximo (padrão 100)
  className?: string; // Permite passar classes extras se necessário
}

export function Progress({ value, max = 100, className }: ProgressProps) {
  // Garante que a porcentagem esteja entre 0 e 100
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <S.ProgressContainer className={className}>
      <S.ProgressIndicator $percentage={percentage} />
    </S.ProgressContainer>
  );
}