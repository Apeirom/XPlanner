// src/components/Goals/GoalDetailMain/index.tsx
'use client';

import { Plane, TrendingUp, ExternalLink } from 'lucide-react';
// Importando o tipo dos dados
import { GoalDataType } from '@/app/metas/mockData';
import * as S from './styles';

// Definindo a interface das Props do componente
interface GoalDetailMainProps {
  data: GoalDataType;
}

// O componente agora recebe 'data' como prop
export function GoalDetailMain({ data }: GoalDetailMainProps) {
  // Removemos a definição interna de goalData e usamos 'data' diretamente

  return (
    <S.Container>
      {/* Cabeçalho da Meta */}
      <S.Header>
        <S.IconWrapper>
          <Plane className="icon" />
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
          <span>{data.progress}% completo</span>
          <span>em {data.monthsLeft} meses</span>
        </S.ProgressMeta>
        <S.ProgressBarBg>
          <S.ProgressBarFill $percentage={data.progress} />
        </S.ProgressBarBg>
      </S.ProgressSection>

      {/* Recomendação de Depósito */}
      <S.RecommendationBox>
        <S.RecommendationText>Depósito mensal recomendado</S.RecommendationText>
        <S.RecommendationValue>R$ {data.recommendedDeposit.toLocaleString('pt-BR')}</S.RecommendationValue>
      </S.RecommendationBox>

      {/* Estratégia Sugerida */}
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

      {/* Produtos Recomendados */}
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