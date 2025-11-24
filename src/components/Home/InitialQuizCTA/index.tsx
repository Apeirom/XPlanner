// src/components/Home/InitialQuizCTA/index.tsx
'use client';

import Link from 'next/link';
import { ClipboardList, ArrowRight, Sparkles } from 'lucide-react';
import * as S from './styles';

export function InitialQuizCTA() {
  return (
    <S.Container>
      <S.GlowEffect />

      <S.ContentWrapper>
        {/* Ícone à esquerda */}
        <S.IconBox>
          <ClipboardList className="main-icon" />
          <Sparkles className="sparkle-icon" />
        </S.IconBox>

        {/* Conteúdo principal à direita */}
        <S.MainContent>
          
          {/* Wrapper para alinhar Título e Botão na mesma linha */}
          <S.HeaderActionWrapper>
            <S.Title>Descubra seu Score de Saúde Financeira</S.Title>

            <S.ActionSection>
              <Link href="/questionario" >
                <S.StartButtonLink>
                  Responder Questionário
                  <ArrowRight className="arrow-icon" />
                </S.StartButtonLink>
              </Link>
            </S.ActionSection>
          </S.HeaderActionWrapper>

          {/* Descrição abaixo do título e do botão */}
          <S.Description>
            Para criar uma jornada personalizada para você no XPlanner, precisamos entender seu momento atual. É rápido: responda a um questionário de 2 minutos e libere seu painel completo.
          </S.Description>

        </S.MainContent>
      </S.ContentWrapper>
    </S.Container>
  );
}