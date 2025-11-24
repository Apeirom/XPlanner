'use client';

import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom right, #581c87, #6b21a8, #18181b); // Roxo para escuro
  padding: 3rem 2rem 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 0 10px 30px -10px rgba(88, 28, 135, 0.5);
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div``;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #e9d5ff; // Roxo claro
  font-size: 1rem;
`;

export const TrophyIcon = styled.div`
  font-size: 3.5rem;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.4rem;
  border-radius: 1.25rem;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  flex: 1;
  padding: 0.8rem;
  border-radius: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${({ $active }) =>
    $active
      ? css`
          background-color: white;
          color: #581c87;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        `
      : css`
          background-color: transparent;
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
          }
        `}
`;