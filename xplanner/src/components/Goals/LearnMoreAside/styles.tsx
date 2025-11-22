'use client';

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: var(--foreground);
  font-weight: 600;
`;

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ArticleCard = styled.a`
  /* Estilo de card de vidro padrão */
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--primary); // Borda dourada no hover
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.75rem;
`;

export const CardTag = styled.span<{ $color: string }>`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  
  ${({ $color }) => $color === 'gold' 
    ? css`
        background-color: rgba(255, 199, 0, 0.15);
        color: var(--primary);
      `
    : css`
        background-color: rgba(168, 85, 247, 0.15);
        color: #d8b4fe;
      `
  }
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  margin-bottom: 1.25rem;
  line-height: 1.4;
  flex: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .link-icon {
    width: 1rem;
    height: 1rem;
    color: var(--primary); // Ícone dourado
    opacity: 0.8;
    transition: opacity 0.2s;
  }

  ${ArticleCard}:hover .link-icon {
    opacity: 1;
  }
`;

export const ReadTime = styled.span`
  font-size: 0.75rem;
  color: var(--muted-foreground);
  font-weight: 500;
`;