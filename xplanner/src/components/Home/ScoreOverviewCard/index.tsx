'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'; // Importando o Link do Next.js
import * as S from './styles';

interface ScoreOverviewCardProps {
  score: number;
  maxScore?: number;
  pointsChanged: number;
  level: number;
  levelTitle: string;
  linkTo?: string; // 1. Nova prop opcional para navegação
}

export function ScoreOverviewCard({
  score,
  maxScore = 1000,
  pointsChanged,
  level,
  levelTitle,
  linkTo, // Recebendo a nova prop
}: ScoreOverviewCardProps) {
  // Constantes geométricas (podem ficar fora ou dentro, como não mudam, aqui está ok)
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  // 3. Estado para controlar a animação do offset
  // Inicializa com a circunferência total (círculo vazio)
  const [animatedOffset, setAnimatedOffset] = useState(circumference);

  // 3. Effect para disparar a animação quando o score mudar ou o componente montar
  useEffect(() => {
    const percentage = (score / maxScore) * 100;
    // Calcula o offset final baseado no score real
    const targetOffset = circumference - (percentage / 100) * circumference;

    // Um pequeno timeout garante que o navegador renderize o estado inicial (vazio)
    // antes de aplicar o novo estado, permitindo que a transição CSS ocorra.
    const timer = setTimeout(() => {
      setAnimatedOffset(targetOffset);
    }, 100); // 100ms é suficiente

    return () => clearTimeout(timer);
  }, [score, maxScore, circumference]);

  // O conteúdo principal do card
  const CardContent = (
    // Passamos a prop $isClickable para estilizar o hover se houver link
    <S.CardContainer $isClickable={!!linkTo}>
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
            // 3. Usamos o estado animado aqui em vez do cálculo direto
            strokeDashoffset={animatedOffset}
            strokeLinecap="round"
          />
        </svg>
        <S.ScoreContent>
          <S.ScoreValue>{score}</S.ScoreValue>
          <S.ScoreLabel>de {maxScore}</S.ScoreLabel>
        </S.ScoreContent>
      </S.CircularProgressWrapper>

      <S.InfoContent>
        <S.Title>Score de Saúde Financeira</S.Title>
        <S.Description>
          Sua pontuação geral baseada em dívidas, orçamento, reserva de emergência e investimentos.
        </S.Description>

        <S.TagsWrapper>
          <S.PointsTag>+{pointsChanged} pontos este mês</S.PointsTag>
          <S.LevelTag>Nível {level} · {levelTitle}</S.LevelTag>
        </S.TagsWrapper>
      </S.InfoContent>
    </S.CardContainer>
  );

  // 1. Lógica condicional para envolver com Link se 'linkTo' existir
  if (linkTo) {
    // Usamos passHref e envolvemos o container estilizado
    // O Next/Link a partir da versão 13 já renderiza um <a> por padrão,
    // então precisamos garantir que nossos estilos não quebrem isso.
    return (
        // O styled-component CardContainer será renderizado dentro do <a> do Link
        // Precisamos garantir no styles.ts que ele se comporte bem.
        <Link href={linkTo} style={{ textDecoration: 'none', display: 'block' }}>
            {CardContent}
        </Link>
    );
  }

  return CardContent;
}