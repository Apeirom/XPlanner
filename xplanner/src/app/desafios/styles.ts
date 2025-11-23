// ---------------------------------------------
// styles.ts — Estilos da página Desafios
// ---------------------------------------------

"use client";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  min-height: 100vh;
  background: var(--background);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.main`
  padding: 2rem;
  color: var(--foreground);
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

export const Header = styled.header`
  gap: 12px;
  padding: 32px;
  margin: -32px -32px 0 -32px;
  
  background: linear-gradient(to right, #9575cd, #7b2cbf, #512da8);
  color: #fff;
  font-weight: 500;

  p {
  font-size: 14px;
  font-weight: 500;
  padding: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 0.6rem 13.1rem;
  border-radius: 50px;
  display: flex;
  align-items: center; 
  gap: 0.5rem;

  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: ${({ $active }) =>
    $active ? "#FFF" : "rgba(255, 255, 255, 0.2)"};

  color: ${({ $active }) =>
    $active ? "#7b2cbf" : "#FFF"};
  font-weight: ${({ $active }) =>
    $active ? "600" : "500"};

  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ $active }) =>
      $active ? "#FFF" : "rgba(255, 255, 255, 0.3)"};
  }
`;

export const List = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1.5rem;
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  background: rgba(255, 199, 0, 0.1);
  color: rgba(255,154,0,0.8);
  display: flex;
  align-items: center; //alinha verticalmente
  justify-content: center; //alinha horizontalmente
  gap: 0.6rem;
  font-size: 0.75rem;
  opacity: 0.9;
`;