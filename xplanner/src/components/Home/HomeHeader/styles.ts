'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WelcomeText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--foreground);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .wave {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  color: var(--muted-foreground);
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButton = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--foreground);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--primary);
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ef4444; // Vermelho notificação
  border-radius: 50%;
`;