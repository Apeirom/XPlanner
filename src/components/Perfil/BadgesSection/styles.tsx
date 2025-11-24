'use client';

import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  padding: 1.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem; // xl
  color: white;
  font-weight: 600;
`;

export const BadgeCount = styled.span`
  color: #a1a1aa; // zinc-400
  font-size: 0.875rem; // sm
`;

export const BadgesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem; // gap-3
  margin-bottom: 1.5rem;
`;

export const BadgeCard = styled.div<{ $isUnlocked: boolean; $gradient: string }>`
  aspect-ratio: 1 / 1; // Quadrado
  border-radius: 1rem; // rounded-2xl
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ $isUnlocked, $gradient }) =>
    $isUnlocked
      ? css`
          background: ${$gradient};
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          &:hover {
            transform: scale(1.07);
          }
        `
      : css`
          background-color: rgba(24, 24, 27, 0.5); // zinc-900/50
          border: 1px solid #27272a; // zinc-800
          opacity: 0.5;
        `
  }
`;

export const BadgeName = styled.span<{ $isUnlocked: boolean }>`
  font-size: 0.75rem; // xs
  text-align: center;
  line-height: 1.25;
  color: ${({ $isUnlocked }) => ($isUnlocked ? 'white' : '#52525b')}; // zinc-600
`;

export const InfoBox = styled.div`
  background: linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(234, 88, 12, 0.1)); // amber/orange-500/10
  border: 1px solid rgba(245, 158, 11, 0.2); // amber-500/20
  border-radius: 1rem; // rounded-2xl
  padding: 1rem;
  text-align: center;

  p {
    color: #fbbf24; // amber-400
    font-size: 0.875rem; // sm
  }
`;