import styled from 'styled-components';

// ... (Todo o código anterior de Overlay, Modal, Header, Title, CloseButton, Content, BalanceInfo, FormGroup, Label, Select, Input, Footer permanece igual)
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: var(--card-bg, #242424);
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  border: 1px solid var(--border-color, #3f3f3f);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary, #a0a0a0);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: var(--bg-secondary, #1a1a1a);
    color: var(--text-primary, #ffffff);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const BalanceInfo = styled.div`
  font-size: 16px;
  color: var(--text-primary, #ffffff);
  margin-bottom: 8px;

  strong {
    color: var(--primary-color, #f39c12);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
`;

export const Select = styled.select`
  background-color: var(--bg-secondary, #1a1a1a);
  border: 1px solid var(--border-color, #3f3f3f);
  border-radius: 8px;
  padding: 12px;
  color: var(--text-primary, #ffffff);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #f39c12);
  }
`;

export const Input = styled.input`
  background-color: var(--bg-secondary, #1a1a1a);
  border: 1px solid var(--border-color, #3f3f3f);
  border-radius: 8px;
  padding: 12px;
  color: var(--text-primary, #ffffff);
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #f39c12);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

// Adicionamos os botões estilizados aqui

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--border-color, #3f3f3f);
  color: var(--text-primary, #ffffff);
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-secondary, #1a1a1a);
  }
`;

export const ConfirmButton = styled.button`
  background-color: var(--primary-color, #f39c12);
  color: #000000; // Texto preto para contraste
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;