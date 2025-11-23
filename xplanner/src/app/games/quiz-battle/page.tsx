'use client';

import { Sidebar } from '@/components/Sidebar';
import { Swords, ArrowLeft, Sparkles, Target } from 'lucide-react'; // Adicionei o ícone Target
import Link from 'next/link';
import * as S from './styles';

export default function QuizBattleComingSoonPage() {
  return (
    <S.PageContainer>
      <Sidebar />

      <S.ContentArea>
        <S.CardContainer>
          {/* Efeito de fundo sutil */}
          <S.BackgroundGlow />

          <S.HeroSection>
            <S.IconWrapper>
              <Swords size={64} strokeWidth={1.5} />
            </S.IconWrapper>
            <S.IconSparkle>
                <Sparkles size={24} />
            </S.IconSparkle>
          </S.HeroSection>

          <S.Badge>
            Em Breve
          </S.Badge>

          <S.Title>
            QuizBattle Arena
          </S.Title>
          
          <S.Subtitle>
            Prepare-se para desafiar seus amigos!
          </S.Subtitle>

          <S.Description>
            Estamos afiando as espadas e preparando as perguntas. Em breve você poderá testar seus conhecimentos financeiros em batalhas PvP em tempo real.
          </S.Description>

          {/* NOVO: Aviso sobre a Fase 2 */}
          <S.PhaseNotice>
            <Target size={16} />
            Objetivo para a Fase 2 do Desafio
          </S.PhaseNotice>

          {/* FIX: Link atualizado para Next.js 13+ */}
          <Link href="/home">
             {/* Removemos passHref, legacyBehavior e o as="a" */}
             <S.BackButton>
                <ArrowLeft size={20} />
                Voltar para o Início
             </S.BackButton>
          </Link>
        </S.CardContainer>
      </S.ContentArea>
    </S.PageContainer>
  );
}