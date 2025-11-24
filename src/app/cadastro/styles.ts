'use client';

import styled, { css } from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--bg-primary, #121214);
  /* Efeito de brilho superior roxo/laranja sutil conforme referências */
  background-image: radial-gradient(circle at 50% -20%, rgba(168, 85, 247, 0.2), rgba(245, 158, 11, 0.1), transparent 50%);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* Opcional: um fundo sutil tipo "glass" para destacar o formulário */
  background-color: rgba(255, 255, 255, 0.02);
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  img {
    /* Brilho sutil na logo */
    filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.3));
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary, #ffffff);
`;

export const Subtitle = styled.p`
  color: var(--text-secondary, #a0a0a0);
  font-size: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary, #ffffff);
  margin-left: 4px;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color, #3f3f3f);
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  color: var(--text-primary, #ffffff);
  outline: none;
  transition: all 0.2s;
  width: 100%;

  &::placeholder {
    color: var(--text-secondary, #a0a0a0);
    opacity: 0.5;
  }

  &:focus {
    border-color: var(--primary-color, #f59e0b);
    background-color: rgba(255, 255, 255, 0.08);
  }

  /* Remove setas do input number */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

// --- Seção de Avatar ---
export const AvatarSelectionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const AvatarGrid = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

// O contêiner do avatar que pode ser selecionado
export const AvatarOption = styled.button<{ $isSelected: boolean }>`
  background: rgba(255, 255, 255, 0.05); // Um fundo sutil para o emoji
  border: none;
  /* Tamanho fixo para manter o alinhamento */
  width: 80px;
  height: 80px;
  /* Centraliza o emoji */
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  border-radius: 24px; // Borda arredondada no container
  transition: all 0.2s ease-in-out;
  position: relative;

  /* Estilo padrão (não selecionado) */
  border: 2px solid transparent;
  opacity: 0.6; // Usamos opacidade em vez de grayscale para emojis

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }

  /* Estilo quando selecionado */
  ${({ $isSelected }) => $isSelected && css`
    border-color: var(--primary-color, #f59e0b);
    opacity: 1;
    box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);
    transform: scale(1.05);
    background: rgba(245, 158, 11, 0.1); // Fundo sutil laranja quando selecionado
  `}

  img {
    border-radius: 14px; // Arredondamento da imagem interna
    display: block;
  }
`;


export const SubmitButton = styled.button`
  /* Gradiente laranja/dourado característico da XP/App */
  background: linear-gradient(90deg, #FF9900 0%, #FFC700 100%);
  color: #000000;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  margin-top: 1rem;

  &:hover {
    opacity: 0.95;
    box-shadow: 0 4px 12px rgba(255, 153, 0, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const FooterLinks = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--text-secondary, #a0a0a0);
`;

export const StyledLink = styled(Link)`
  color: var(--primary-color, #f59e0b);
  font-weight: 600;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;