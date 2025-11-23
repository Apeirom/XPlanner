// -------------------------------------------
// ChallengeCard — Card individual do desafio 
// -------------------------------------------
// Reaproveita a barra de progresso já existente no componente de Trilhas.
// Importamos ProgressBarContainer e ProgressBarFill do TrilhaCard styles para garantir aparência idêntica e animação coerente.

'use client';

import { useMemo } from 'react';
import { CheckCircle } from 'lucide-react';
import * as S from './styles';

// Importar a barra de progresso reutilizável diretamente das Trilhas (mesma implementação)
import { ProgressBarContainer, ProgressBarFill } from '@/components/Trilhas/TrilhaCard/styles';

import type { Challenge, UserChallengeProgress } from '@/app/desafios/mockData';

interface Props {
  data: Challenge;
  onCollect?: (challengeId: string) => void;
}

export function ChallengeCard({ data, onCollect }: Props) {
  // Define o progresso do usuário: pega o último registro de progresso (se houver)
  const progress = useMemo(() => {
    const arr = data.userProgress ?? [];
    if (arr.length === 0) return 0;
    const last = arr[arr.length - 1];
    // Garantir que esteja entre 0 e 100
    return Math.max(0, Math.min(100, Math.round(last.currentProgress)));
  }, [data.userProgress]);

  const completed = (data.userProgress ?? []).some((p: UserChallengeProgress) => p.isCompleted);

  return (
    <S.Card $completed={completed}>
      {/* Top row: ícone (esquerda) + tipo (direita) */}
      <S.TopRow>
        <S.LeftSide>
          {/* Se iconUrl for uma URL (começa com / ou http), renderizamos <img>, senão imprimimos o texto (emoji) */}
          {data.iconUrl && (data.iconUrl.startsWith('/') || data.iconUrl.startsWith('http')) ? (
            <S.IconImg src={data.iconUrl} alt={data.title} />
          ) : (
            <S.IconEmoji>{data.iconUrl}</S.IconEmoji>
          )}

          <div>
            <S.Title>{data.title}</S.Title>
            <S.Description>{data.description}</S.Description>
          </div>
        </S.LeftSide>

        <S.RightTopRow>
          {/* Check visível quando completado */}
          {completed && (
            <S.CheckWrapper title="Concluído">
              <CheckCircle size={20} />
            </S.CheckWrapper>
          )}

          <S.TypeTag $type={data.challengeType}>
            {data.challengeType === 'DAILY' ? 'Diário' : data.challengeType === 'WEEKLY' ? 'Semanal' : 'Mensal'}
          </S.TypeTag>
        </S.RightTopRow>
      </S.TopRow>

      {/* --- Barra de progresso (reutilizada das Trilhas) --- */}
      <div style={{ marginTop: 12 }}>
        <ProgressBarContainer>
          <ProgressBarFill $percentage={progress} />
        </ProgressBarContainer>
        <S.ProgressText>{progress}%</S.ProgressText>
      </div>

      {/* Rewards row */}
      <S.BottomRow>
        <S.RewardsGroup>
          <S.Reward>
            <span>🔥</span>
            <strong>{data.xpPointsReward} XP</strong>
          </S.Reward>

          {data.xpCoinsReward !== undefined && (
            <S.Reward>
              <span>₿</span>
              <strong>{data.xpCoinsReward}</strong>
            </S.Reward>
          )}
        </S.RewardsGroup>

        <div>
          <S.CollectButton
            onClick={() => onCollect?.(data.id)}
            disabled={completed}
            aria-disabled={completed}
          >
            {completed ? 'Reivindicado' : 'Reivindicar'}
          </S.CollectButton>
        </div>
      </S.BottomRow>
    </S.Card>
  );
}

export default ChallengeCard;