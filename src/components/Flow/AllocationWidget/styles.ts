import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Icon = styled.div`
  color: var(--primary-color, #f39c12);
  background-color: rgba(243, 156, 18, 0.1);
  padding: 8px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BalanceLabel = styled.div`
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
`;

export const BalanceValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
`;

export const Description = styled.p`
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
  line-height: 1.5;
`;

// Adicionamos o estilo do botão aqui
export const AllocateButton = styled.button`
  
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: black;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  width: 100%; /* Ocupa toda a largura do widget */
  margin-top: 8px;

  
  &:hover {
    background: linear-gradient(90deg, #FFB84D 0%, #FFD633 100%);
    box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;