'use client';

// 1. Importe useState e useEffect
import { useState, useEffect } from 'react';
import { Flame, Gift, CheckCircle2, Lock } from 'lucide-react';
import { Challenge } from '@/app/desafios/mockData';
import * as S from './styles';

interface ChallengeCardProps {
  data: Challenge;
  onClaim?: (challengeId: string) => void;
}

export function ChallengeCard({ data, onClaim }: ChallengeCardProps) {
  const { userProgress } = data;
  const isCompleted = userProgress?.isCompleted || false;
  const isClaimed = userProgress?.isClaimed || false;
  const currentProgress = userProgress?.currentProgress || 0;
  const total = data.durationDays;
  const progressPercentage = total > 0 ? (currentProgress / total) * 100 : 0;

  // 2. Estado local para a animação da barra de progresso
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // 3. Effect para disparar a animação após o componente montar
  useEffect(() => {
    // Usamos variáveis para possíveis identificadores de limpeza
    let timer: ReturnType<typeof setTimeout> | null = null;
    let rafId: number | null = null;

    // Se o desafio já estiver completo, atualiza de forma assíncrona
    // para evitar setState síncrono dentro do efeito (cascading renders)
    if (isCompleted) {
      rafId = requestAnimationFrame(() => setAnimatedProgress(100));
      return () => {
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 100); // Pequeno delay para garantir que o navegador renderize o 0% antes

    return () => {
      if (timer) clearTimeout(timer);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [progressPercentage, isCompleted]);

  return (
    <S.CardContainer $completed={isCompleted}>
      {/* Cabeçalho do Card */}
      <S.CardHeaderRow>
        <S.IconWrapper $completed={isCompleted}>
          {data.iconUrl}
        </S.IconWrapper>
        
        <S.HeaderContent>
          <S.TitleRow>
            <div>
              <S.ChallengeTitle>{data.title}</S.ChallengeTitle>
              <S.ChallengeDescription>{data.description}</S.ChallengeDescription>
            </div>
            {isCompleted && (
              <CheckCircle2 size={24} color="#4ade80" />
            )}
          </S.TitleRow>
        </S.HeaderContent>
      </S.CardHeaderRow>

      {/* Seção de Progresso */}
      {!isCompleted && (
        <S.ProgressSection>
          <S.ProgressLabels>
            <span>Progresso</span>
            <span>{currentProgress}/{total}</span>
          </S.ProgressLabels>
          <S.ProgressBar>
            {/* 4. Usando o estado ANIMADO aqui em vez do valor estático */}
            <S.ProgressFill $percentage={animatedProgress} />
          </S.ProgressBar>
        </S.ProgressSection>
      )}

      {/* Rodapé com Recompensas e Botão */}
      <S.RewardsFooter>
        <S.RewardsList>
          <S.RewardItem>
            <S.RewardIcon $type="xp"><Flame size={16} /></S.RewardIcon>
            <S.RewardValue>+{data.xpPointsReward} XP</S.RewardValue>
          </S.RewardItem>
          {data.xpCoinsReward && (
            <S.RewardItem>
              <S.RewardIcon $type="coin">XPC</S.RewardIcon>
              <S.RewardValue>+{data.xpCoinsReward}</S.RewardValue>
            </S.RewardItem>
          )}
        </S.RewardsList>

        {/* Lógica do Botão de Ação */}
        {isCompleted && !isClaimed ? (
          <S.ClaimButton onClick={() => onClaim?.(data.id)}>
            <Gift size={18} />
            Reivindicar
          </S.ClaimButton>
        ) : isCompleted ? (
          <S.StatusBadge $status="claimed">
            <CheckCircle2 size={18} />
            Reivindicado
          </S.StatusBadge>
        ) : (
          <S.StatusBadge $status="locked">
            <Lock size={18} />
            Bloqueado
          </S.StatusBadge>
        )}
      </S.RewardsFooter>
    </S.CardContainer>
  );
}