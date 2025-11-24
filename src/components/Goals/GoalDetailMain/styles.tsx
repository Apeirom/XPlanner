'use client';

import styled, { css } from 'styled-components';

// Container principal estilo "vidro escuro"
export const Container = styled.div`
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 1.5rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// --- Header ---
export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  /* Fundo roxo translúcido para o ícone */
  background-color: rgba(168, 85, 247, 0.15); 
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 2rem;
    height: 2rem;
    color: #d8b4fe; // Roxo claro
  }
`;

export const HeaderInfo = styled.div`
  flex: 1;
`;

export const GoalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 0.75rem;
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

export const FinancialValues = styled.div`
  text-align: right;
`;

export const CurrentValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
`;

export const TargetValue = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

// --- Progresso ---
export const ProgressSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ProgressMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--muted-foreground);
  font-weight: 500;
`;

export const ProgressBarBg = styled.div`
  width: 100%;
  height: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  border-radius: 9999px;
  /* Gradiente Roxo para Dourado XP */
  background: linear-gradient(90deg, #a855f7, #FFC700);
  transition: width 0.5s ease-in-out;
`;

// --- Recomendação ---
export const RecommendationBox = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RecommendationText = styled.span`
  color: var(--muted-foreground);
  font-weight: 500;
`;

export const RecommendationValue = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  /* Usando a cor primária (dourado) para destaque */
  color: var(--primary); 
`;

// --- Seções Genéricas ---
export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeaderDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .trend-icon {
    color: #a855f7; // Roxo para o ícone de tendência
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.5rem;
`;

export const SectionDescription = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 1rem;
`;

// --- Estratégia ---
export const StrategyTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const StrategyTag = styled.span<{ $variant?: 'default' | 'highlight' }>`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  
  ${({ $variant }) => $variant === 'highlight' 
    ? css`
        /* Variante de destaque (ex: CDB 100%) */
        background-color: rgba(168, 85, 247, 0.15);
        color: #d8b4fe;
        border: 1px solid rgba(168, 85, 247, 0.3);
      `
    : css`
        /* Variante padrão (ex: Renda Fixa) */
        background-color: var(--muted);
        color: var(--muted-foreground);
        border: 1px solid var(--border);
      `
  }
`;

// --- Produtos ---
export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const ProductButton = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  color: var(--foreground);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }
`;

export const ExternalLinkButton = styled.button`
  background: none;
  border: none;
  /* Cor dourada para o link externo */
  color: var(--primary); 
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 199, 0, 0.1);
  }

  .link-icon {
    width: 1rem;
    height: 1rem;
  }
`;