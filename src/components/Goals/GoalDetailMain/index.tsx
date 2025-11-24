// src/components/Goals/GoalDetailMain/index.tsx
'use client';

// 1. Importe useState e useEffect
import { useState, useEffect, ComponentType } from 'react';
import { Plane, Home, Car, TrendingUp, ExternalLink } from 'lucide-react';
import { GoalDataType } from '@/app/metas/mockData';
import * as S from './styles';

interface GoalDetailMainProps {
  data: GoalDataType;
}

// Mapeamento estático de ícones fora do componente para evitar criar componentes durante render
const ICON_MAP: Record<GoalDataType['icon'], ComponentType<Record<string, unknown>>> = {
  home: Home,
  car: Car,
  plane: Plane,
};

export function GoalDetailMain({ data }: GoalDetailMainProps) {
  // 2. Estado local para a animação da barra de progresso
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // 3. Effect para disparar a animação
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(data.progress);
    }, 100); // Pequeno delay

    return () => clearTimeout(timer);
  }, [data.progress]);

  const IconComponent = ICON_MAP[data.icon] || Plane;

  return (
    <S.Container>
      {/* Cabeçalho da Meta */}
      <S.Header>
        <S.IconWrapper>
          {/* Usando o ícone dinâmico */}
          <IconComponent className="icon" />
        </S.IconWrapper>
        <S.HeaderInfo>
          <S.GoalTitle>{data.title}</S.GoalTitle>
          <S.TagsWrapper>
            {data.tags.map(tag => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </S.TagsWrapper>
        </S.HeaderInfo>
        <S.FinancialValues>
          <S.CurrentValue>R$ {data.currentAmount.toLocaleString('pt-BR')}</S.CurrentValue>
          <S.TargetValue>de R$ {data.targetAmount.toLocaleString('pt-BR')}</S.TargetValue>
        </S.FinancialValues>
      </S.Header>

      {/* Seção de Progresso */}
      <S.ProgressSection>
        <S.ProgressMeta>
          <span>{data.progress.toFixed(1)}% completo</span> {/* Arredondei para 1 casa decimal */}
          <span>em {data.monthsLeft} meses</span>
        </S.ProgressMeta>
        <S.ProgressBarBg>
          {/* 4. Usando o estado ANIMADO aqui */}
          <S.ProgressBarFill $percentage={animatedProgress} />
        </S.ProgressBarBg>
      </S.ProgressSection>

      {/* ... (Restante do componente permanece igual, usando 'data') ... */}
      <S.RecommendationBox>
        <S.RecommendationText>Depósito mensal recomendado</S.RecommendationText>
        <S.RecommendationValue>R$ {data.recommendedDeposit.toLocaleString('pt-BR')}</S.RecommendationValue>
      </S.RecommendationBox>

      <S.Section>
        <S.SectionTitle>Estratégia Sugerida</S.SectionTitle>
        <S.StrategyTagsWrapper>
          {data.strategyTags.map((tag, index) => (
            <S.StrategyTag key={tag} $variant={index === 2 ? 'highlight' : 'default'}>
              {tag}
            </S.StrategyTag>
          ))}
        </S.StrategyTagsWrapper>
      </S.Section>

      <S.Section>
        <S.SectionHeaderDisplay>
          <S.SectionTitle>Produtos XP Recomendados</S.SectionTitle>
          <TrendingUp className="trend-icon" />
        </S.SectionHeaderDisplay>
        <S.SectionDescription>
          Baseado no prazo da sua meta e perfil de risco.
        </S.SectionDescription>
        
        <S.ProductsWrapper>
          {data.products.map(product => (
            <S.ProductButton key={product}>{product}</S.ProductButton>
          ))}
        </S.ProductsWrapper>

        <S.ExternalLinkButton>
          Ver produtos sugeridos na XP <ExternalLink className="link-icon" />
        </S.ExternalLinkButton>
      </S.Section>

    </S.Container>
  );
}