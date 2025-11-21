// src/components/Sidebar/styles.ts
'use client';

import styled from 'styled-components';

// Largura da Sidebar
const SIDEBAR_WIDTH = '16rem'; // Aprox. 256px

export const SidebarContainer = styled.aside`
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  background-color: var(--background); // Cor de fundo preta do tema
  border-right: 1px solid var(--border); // Borda sutil à direita
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: sticky;
  top: 0; /* Cola no topo do container pai */
  z-index: 50;
  /* Esconde a sidebar em telas menores que tablets */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  img {
    object-fit: contain;
    /* Brilho laranja sutil na logo */
    filter: drop-shadow(0 0 10px rgba(242, 201, 76, 0.3));
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; // Espaçamento entre os itens
  flex: 1; // Ocupa o espaço disponível
`;

// Prop para o estilo condicional do item ativo
interface NavItemProps {
  $isActive?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: var(--text-base);
  transition: all 0.2s ease;
  cursor: pointer;

  /* Estilos Condicionais baseados em $isActive */
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--primary)' : 'transparent'};
    
  color: ${({ $isActive }) =>
    $isActive ? 'var(--primary-foreground)' : 'var(--muted-foreground)'};

  /* Ícone */
  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ $isActive }) =>
      $isActive ? 'var(--primary-foreground)' : 'var(--muted-foreground)'};
  }

  /* Hover (apenas para itens não ativos) */
  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? 'var(--primary)' : 'var(--muted)'};
    
    color: ${({ $isActive }) =>
      $isActive ? 'var(--primary-foreground)' : 'var(--foreground)'};
    
    .icon {
      color: ${({ $isActive }) =>
        $isActive ? 'var(--primary-foreground)' : 'var(--foreground)'};
    }
  }
`;

export const SidebarFooter = styled.div`
  margin-top: auto; // Empurra para o final
`;

export const EcosystemButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: var(--radius);
  background-color: rgba(255, 255, 255, 0.05); // Fundo translúcido sutil
  border: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;

  .xp-icon {
    /* Filtro para deixar o ícone pequeno da XP na cor do texto */
    filter: grayscale(100%) brightness(0.7);
  }

  &:hover {
    background-color: var(--muted);
    color: var(--foreground);
    border-color: var(--muted-foreground);
    
    .xp-icon {
      filter: none; // Remove o filtro no hover
    }
  }
`;