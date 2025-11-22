// src/components/Home/PlayLearnSection/index.tsx
'use client';

// 1. Importe o componente Link do Next.js
import Link from 'next/link';
import { Gamepad2, Zap, Swords, ArrowRight } from 'lucide-react';
import * as S from './styles';

export function PlayLearnSection() {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.HeaderTitle>
          <Gamepad2 className="icon" />
          Jogar & Aprender
        </S.HeaderTitle>
        <S.XpTag>+XP</S.XpTag>
      </S.Header>
      <S.Description>
        Teste seus conhecimentos financeiros e compita com amigos!
      </S.Description>

      <S.GamesGrid>
        {/* Card do Jogo 1: Milionário do Dinheiro */}
        <Link href="/games/millionaire" style={{ textDecoration: 'none', display: 'block' }}>
          <S.GameCard $variant="gold">
            <S.CardHeader>
              <S.IconWrapper $variant="gold">
                <Zap className="icon" fill="currentColor" />
              </S.IconWrapper>
              <S.TypeBadge>Solo</S.TypeBadge>
            </S.CardHeader>
            <S.GameTitle>Milionário do Dinheiro</S.GameTitle>
            <S.GameDescription>
              Responda perguntas e ganhe até 1 milhão de pontos! Tipo &quot;Show do Milhão&quot;, mas de finanças.
            </S.GameDescription>
            <S.PlayButton $variant="gold">
              Jogar Agora <ArrowRight className="arrow" />
            </S.PlayButton>
          </S.GameCard>
        </Link>

        {/* Card do Jogo 2: Batalha de Quiz */}
        <Link href="/games/quiz-battle" style={{ textDecoration: 'none', display: 'block' }}>
          <S.GameCard $variant="blue">
            <S.CardHeader>
              <S.IconWrapper $variant="blue">
                <Swords className="icon" />
              </S.IconWrapper>
              <S.TypeBadge>PvP</S.TypeBadge>
            </S.CardHeader>
            <S.GameTitle>Batalha de Quiz</S.GameTitle>
            <S.GameDescription>
              Desafie seus amigos em quizzes financeiros em tempo real. Quem é o mais esperto?
            </S.GameDescription>
            <S.PlayButton $variant="blue">
              Desafiar Amigos <ArrowRight className="arrow" />
            </S.PlayButton>
          </S.GameCard>
        </Link>
      </S.GamesGrid>
    </S.SectionContainer>
  );
}