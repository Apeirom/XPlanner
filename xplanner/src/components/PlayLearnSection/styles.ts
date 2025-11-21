'use client';

import styled, { css } from 'styled-components';

// Container principal da seção (fundo escuro sólido nas bordas)
export const SectionContainer = styled.section`
  background-color: #09090b; // Um tom quase preto sólido para destacar essa área
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    color: #FFC700;
  }
`;

export const XpTag = styled.span`
  background-color: #FFC700;
  color: black;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

export const Description = styled.p`
  color: var(--muted-foreground);
  margin-bottom: 2rem;
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

// Variantes de cor para os cards de jogo
interface VariantProps {
  $variant: 'gold' | 'blue';
}

export const GameCard = styled.div<VariantProps>`
  border-radius: 1.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
  /* Estilos condicionais baseados na variante */
  ${({ $variant }) =>
    $variant === 'gold'
      ? css`
          // Gradiente Dourado XP
          background: linear-gradient(135deg, #FF9900 0%, #FFC700 100%);
          color: black; // Texto preto no fundo dourado
        `
      : css`
          // Gradiente Azul/Roxo Escuro
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white; // Texto branco no fundo azul
        `}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

export const IconWrapper = styled.div<VariantProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $variant }) =>
    $variant === 'gold'
      ? css`
          background-color: rgba(0, 0, 0, 0.2);
          .icon { color: black; }
        `
      : css`
          background-color: rgba(255, 255, 255, 0.2);
          .icon { color: white; }
        `}
  
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const TypeBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

export const GameTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const GameDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  flex: 1; // Garante que os botões fiquem alinhados no final
  opacity: 0.9;
`;

export const PlayButton = styled.button<VariantProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  ${({ $variant }) =>
    $variant === 'gold'
      ? css`color: black;`
      : css`color: white;`}

  .arrow {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(4px);
  }
`;