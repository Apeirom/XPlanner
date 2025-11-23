'use client';

import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ $completed?: boolean }>`
  border-radius: 1.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid;

  ${({ $completed }) =>
    $completed
      ? css`
          background: linear-gradient(to bottom right, rgba(20, 83, 45, 0.4), rgba(6, 78, 59, 0.4));
          border-color: rgba(34, 197, 94, 0.3);
        `
      : css`
          background-color: rgba(24, 24, 27, 0.6);
          border-color: #27272a;
        `}

  &:hover {
    transform: translateY(-3px);
  }
`;

export const CardHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.2rem;
`;

export const IconWrapper = styled.div<{ $completed?: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  
  ${({ $completed }) =>
    $completed
      ? css`background-color: rgba(34, 197, 94, 0.2);`
      : css`background-color: #27272a;`
  }
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem;
`;

export const ChallengeTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const ChallengeDescription = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
  margin: 0;
`;

// --- Progresso ---
export const ProgressSection = styled.div`
  margin-bottom: 1.2rem;
`;

export const ProgressLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.6rem;
  color: #a1a1aa;
  
  span:last-child { color: white; font-weight: 500; }
`;

export const ProgressBar = styled.div`
  height: 0.6rem;
  background-color: #27272a;
  border-radius: 9999px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background: linear-gradient(90deg, #a855f7, #22c55e); 
  border-radius: 9999px;
  transition: width 0.5s ease-in-out;
`;

// --- Recompensas ---
export const RewardsFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  border-top: 1px solid #27272a;
`;

export const RewardsList = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RewardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const RewardIcon = styled.div<{ $type: 'xp' | 'coin' }>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: bold;

  ${({ $type }) => $type === 'xp' 
    ? css`background-color: rgba(168, 85, 247, 0.2); color: #c084fc;`
    : css`background-color: rgba(245, 158, 11, 0.2); color: #fbbf24;`
  }
`;

export const RewardValue = styled.span`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
`;

// --- Botões e Status ---
export const ClaimButton = styled.button`
  background: linear-gradient(to right, #f59e0b, #ea580c);
  color: black;
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  border-radius: 0.8rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
  }
`;

export const StatusBadge = styled.div<{ $status: 'claimed' | 'locked' }>`
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  ${({ $status }) => $status === 'claimed'
    ? css`color: #4ade80;`
    : css`color: #52525b;`
  }
`;