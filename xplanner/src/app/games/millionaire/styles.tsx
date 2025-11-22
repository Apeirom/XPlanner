// src/app/games/millionaire/styles.ts
'use client';

import styled, { css } from 'styled-components';

// Layout principal com 3 colunas: Sidebar | Jogo | Apresentador
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr 24rem; // Adicionada coluna para o apresentador
  min-height: 100vh;
  background-color: #0c0c0e;

  @media (max-width: 1366px) {
    grid-template-columns: 16rem 1fr; // Esconde apresentador em telas menores
  }
`;

export const GameArea = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Espalha o conteúdo verticalmente
  align-items: center;
  min-height: 100vh;
  /* Fundo azulado tecnológico como na referência */
  background: linear-gradient(180deg, #0a0e1a 0%, #1a1a2e 100%);
  position: relative;
  overflow-y: auto; // Garante scroll se a tela for muito pequena verticalmente

  /* Grid de fundo sutil (opcional) */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none;
  }
`;

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1;
  margin-top: auto;
  margin-bottom: auto;
`;

// --- NOVO CABEÇALHO COM AJUDAS ---
export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 900px;
`;

export const HelpButton = styled.button`
  background-color: rgba(0, 132, 255, 0.2); // Azul translúcido
  color: #0084ff;
  border: 2px solid #0084ff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-size: 0.875rem;

  &:hover:not(:disabled) {
    background-color: #0084ff;
    color: white;
    box-shadow: 0 0 15px rgba(0, 132, 255, 0.5);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(0.5);
  }
`;

export const CurrentPrizeDisplay = styled.div`
  text-align: center;
  background: rgba(0,0,0,0.3);
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 199, 0, 0.2);
`;

export const PrizeLabel = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`;

export const PrizeValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #FFC700; // Dourado vibrante
  text-shadow: 0 0 20px rgba(255, 199, 0, 0.3);
`;

// --- PERGUNTA E OPÇÕES ---
export const QuestionText = styled.div`
  background: linear-gradient(90deg, #990000 0%, #ff0000 50%, #990000 100%); // Vermelho degradê
  border: 3px solid #ff3333;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: white;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  position: relative;
`;

export const OptionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

// Estado do botão de opção
interface OptionButtonProps {
  $state: 'default' | 'selected' | 'correct' | 'wrong';
}

export const OptionButton = styled.button<OptionButtonProps>`
  padding: 1.25rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;

  /* Letra da opção (A, B, C, D) no círculo */
  .option-letter-container {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.3);
    border: 2px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  /* Estilos baseados no estado - Cores ajustadas para a referência */
  ${({ $state }) => {
    switch ($state) {
      case 'selected':
        return css`
          background: linear-gradient(90deg, #FF9900, #FFC700); // Dourado/Laranja ao selecionar
          border-color: #FFD700;
          color: black;
          box-shadow: 0 0 20px rgba(255, 199, 0, 0.4);
          .option-letter-container { background-color: rgba(0,0,0,0.1); border-color: black; }
        `;
      case 'correct':
        return css`
          background: linear-gradient(90deg, #22c55e, #16a34a); // Verde
          border-color: #4ade80;
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.6);
        `;
      case 'wrong':
        return css`
          background: linear-gradient(90deg, #ef4444, #b91c1c); // Vermelho
          border-color: #ff6b6b;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.6);
        `;
      default: // 'default'
        return css`
          background: linear-gradient(90deg, #1a1a2e, #2a2a4e); // Azul escuro padrão
          border-color: #3a3a5e;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.3);

          &:hover {
            border-color: #FFC700;
            box-shadow: 0 0 15px rgba(255, 199, 0, 0.2);
          }
        `;
    }
  }}
`;

// --- NOVO RODAPÉ COM VALORES E AÇÕES ---
export const FooterBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin-bottom: 1rem;
  z-index: 1;
`;

export const PrizeBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 5px
`;

export const PrizeBox = styled.div<{ $variant: 'error' | 'stop' | 'success' }>`
  background: linear-gradient(180deg, #FFC700 0%, #E6A800 100%); // Dourado padrão
  border-radius: var(--radius-sm);
  padding: 0.1rem;
  text-align: center;
  color: black;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 3px solid #FFD700;

  ${({ $variant }) => $variant === 'error' && css`
    background: linear-gradient(180deg, #ef4444 0%, #b91c1c 100%); // Vermelho
    border-color: #ff6b6b;
    color: white;
  `}
  
  ${({ $variant }) => $variant === 'success' && css`
    background: linear-gradient(180deg, #22c55e 0%, #15803d 100%); // Verde
    border-color: #4ade80;
    color: white;
  `}
  
  ${({ $variant }) => $variant === 'stop' && css`
    background: linear-gradient(180deg, #0084ff 0%, #005bb5 100%); // Azul
    border-color: #3399ff;
    color: white;
  `}
`;

export const BoxLabel = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  opacity: 0.9;
  letter-spacing: 1px;
`;

export const BoxValue = styled.div`
  font-size: 1.5rem;
`;

export const ActionsBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 1.25rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary': // Confirmar (Verde)
        return css`
          background: linear-gradient(180deg, #22c55e 0%, #15803d 100%);
          color: white;
          border: 3px solid #4ade80;
          &:hover:not(:disabled) { box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); transform: translateY(-2px); }
        `;
      case 'secondary': // Parar (Azul)
        return css`
          background: linear-gradient(180deg, #0084ff 0%, #005bb5 100%);
          color: white;
          border: 3px solid #3399ff;
          &:hover:not(:disabled) { box-shadow: 0 0 20px rgba(0, 132, 255, 0.6); transform: translateY(-2px); }
        `;
      case 'danger': // Pular/Errar (Vermelho)
        return css`
          background: linear-gradient(180deg, #ef4444 0%, #b91c1c 100%);
          color: white;
          border: 3px solid #ff6b6b;
          &:hover:not(:disabled) { box-shadow: 0 0 20px rgba(239, 68, 68, 0.6); transform: translateY(-2px); }
        `;
      default:
        return css``;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(0.8);
  }
`;

// --- ÁREA DO APRESENTADOR ---
export const HostArea = styled.aside`
  background-color: #0a0e1a;
  border-left: 2px solid #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 1366px) {
    display: none; // Esconde em telas menores
  }

  /* Placeholder para o avatar/vídeo */
  .host-container {
    width: 90%;
    height: 70%;
    background: linear-gradient(135deg, #1a1a2e, #0c0c0e);
    border-radius: 1.5rem;
    border: 3px solid rgba(255, 199, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--muted-foreground);
    box-shadow: inset 0 0 50px rgba(0,0,0,0.5);
    padding: 2rem;
    text-align: center;

    .avatar-placeholder {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: linear-gradient(45deg, var(--primary), #ff5e00);
        margin-bottom: 1.5rem;
        opacity: 0.8;
    }
    h3 { color: white; margin-bottom: 0.5rem; }
  }
`;