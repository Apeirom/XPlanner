'use client';

import * as S from './styles';

interface ScoreOverviewCardProps {
  score: number;
  maxScore?: number;
  pointsChanged: number;
  level: number;
  levelTitle: string;
}

export function ScoreOverviewCard({
  score,
  maxScore = 1000,
  pointsChanged,
  level,
  levelTitle,
}: ScoreOverviewCardProps) {
  const percentage = (score / maxScore) * 100;
  
  // Cálculos para o SVG circular
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <S.CardContainer>
      <S.CircularProgressWrapper>
        <svg width="200" height="200" viewBox="0 0 200 200">
          {/* Círculo de fundo (trilha escura) */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="12"
          />
          {/* Círculo de progresso (Gradiente XP) */}
          <defs>
            <linearGradient id="xpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#FFC700" />
            </linearGradient>
          </defs>
          <S.ProgressCircle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#xpGradient)"
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <S.ScoreContent>
          <S.ScoreValue>{score}</S.ScoreValue>
          <S.ScoreLabel>de {maxScore}</S.ScoreLabel>
        </S.ScoreContent>
      </S.CircularProgressWrapper>

      <S.InfoContent>
        <S.Title>Financial Health Score</S.Title>
        <S.Description>
          Your overall score based on debts, budget, emergency fund and investments.
        </S.Description>

        <S.TagsWrapper>
          <S.PointsTag>+{pointsChanged} points this month</S.PointsTag>
          <S.LevelTag>Level {level} · {levelTitle}</S.LevelTag>
        </S.TagsWrapper>
      </S.InfoContent>
    </S.CardContainer>
  );
}