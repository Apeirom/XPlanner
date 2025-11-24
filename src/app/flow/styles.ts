import styled from 'styled-components';

// MUDANÇA 1: Usar CSS Grid para o layout principal da página
export const PageContainer = styled.div`
  display: grid;
  // Define duas colunas: uma para a sidebar (assumindo largura fixa, ex: 250px) e o resto para o conteúdo
  // Se sua Sidebar tiver outra largura, ajuste aqui.
  grid-template-columns: 250px 1fr; 
  min-height: 100vh; // Altura mínima de 100% da tela
  background-color: var(--background); // Fundo principal da aplicação

  // Em telas menores, empilha a sidebar e o conteúdo
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// MUDANÇA 2: Ajustar a área de conteúdo principal
export const Content = styled.main`
  // Removemos o flex: 1 pois agora estamos num grid
  display: flex;
  padding: 32px;
  gap: 32px;
  // MUDANÇA: Removemos overflow: hidden e height: 100vh.
  // Adicionamos overflow-y: auto para permitir rolagem do conteúdo se necessário
  overflow-y: auto; 
  height: auto; // A altura se ajusta ao conteúdo

  @media (max-width: 1024px) {
    flex-direction: column;
    // Em telas médias/pequenas, a rolagem já é natural do fluxo
  }
`;

export const MainColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  // MUDANÇA: Removemos overflow: hidden
  // O conteúdo deve fluir naturalmente
`;

export const AsideColumn = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 320px;

  @media (max-width: 1024px) {
    min-width: auto; // Remove a largura mínima em telas menores
    width: 100%;
  }
`;

// O restante dos estilos (Header, Title, Subtitle) permanece igual
export const Header = styled.header`
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: var(--text-secondary, #a0a0a0);
`;