'use client';

import { Gamepad2, Zap, Swords, ArrowRight } from 'lucide-react';
import * as S from './styles';

export function PlayLearnSection() {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.HeaderTitle>
          <Gamepad2 className="icon" />
          Play & Learn
        </S.HeaderTitle>
        <S.XpTag>+XP</S.XpTag>
      </S.Header>
      <S.Description>
        Test your financial knowledge and compete with friends!
      </S.Description>

      <S.GamesGrid>
        {/* Card do Jogo 1: Money Millionaire (Tema Dourado XP) */}
        <S.GameCard $variant="gold">
          <S.CardHeader>
            <S.IconWrapper $variant="gold">
              <Zap className="icon" fill="currentColor" />
            </S.IconWrapper>
            <S.TypeBadge>Solo</S.TypeBadge>
          </S.CardHeader>
          <S.GameTitle>Money Millionaire</S.GameTitle>
          <S.GameDescription>
            Answer questions and win up to 1 million points! Like &quot;Show do Milhão&quot; but for finance.
          </S.GameDescription>
          <S.PlayButton $variant="gold">
            Play Now <ArrowRight className="arrow" />
          </S.PlayButton>
        </S.GameCard>

        {/* Card do Jogo 2: QuizBattle (Tema Azul/Roxo) */}
        <S.GameCard $variant="blue">
          <S.CardHeader>
            <S.IconWrapper $variant="blue">
              <Swords className="icon" />
            </S.IconWrapper>
            <S.TypeBadge>PvP</S.TypeBadge>
          </S.CardHeader>
          <S.GameTitle>QuizBattle</S.GameTitle>
          <S.GameDescription>
            Challenge your friends in real-time financial quizzes. Who&apos;s the smartest?
          </S.GameDescription>
          <S.PlayButton $variant="blue">
            Challenge Friends <ArrowRight className="arrow" />
          </S.PlayButton>
        </S.GameCard>
      </S.GamesGrid>
    </S.SectionContainer>
  );
}