'use client';

import styled from 'styled-components';

// Layout padrão
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  min-height: 100vh;
  background-color: var(--background);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentArea = styled.main`
  padding: 0;
  overflow-y: auto;
  height: 100vh;
  background-color: #09090b; // Fundo escuro
`;

// Contêiner para a lista de desafios
export const ChallengesList = styled.div`
  padding: 0 2rem 2rem; // Padding lateral e inferior
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Footer com mensagem
export const FooterInfo = styled.div`
  margin: 0 2rem 3rem;
  padding: 1rem;
  border-radius: 1rem;
  background: linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(234, 88, 12, 0.1));
  border: 1px solid rgba(245, 158, 11, 0.2);
  text-align: center;

  p {
    color: #fbbf24;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;