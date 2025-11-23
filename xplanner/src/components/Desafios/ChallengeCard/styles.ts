// ------------------------------------
// styles.ts — Estilo do ChallengeCard
// ------------------------------------

'use client';

import styled from 'styled-components';

export const Card = styled.article<{ $completed?: boolean }>`
  background: ${({ $completed }) => ($completed ? 'rgba(60, 220, 40, 0.08)' : 'var(--card)')};
  border: 1px solid var(--border);
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  position: relative;
  transition: transform .12s ease, box-shadow .12s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }
`;

export const TopRow = styled.div`
  display:flex;
  justify-content:space-between;
  gap: 12px;
  align-items:flex-start;
`;

export const LeftSide = styled.div`
  display:flex;
  align-items:flex-start;
  gap: 12px;
  flex:1;
`;

export const IconImg = styled.img`
  width:44px;
  height:44px;
  border-radius: 10px;
  object-fit:cover;
`;

export const IconEmoji = styled.div`
  width:44px;
  height:44px;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  background: rgba(255,255,255,0.03);
`;

export const Title = styled.h3`
  margin:0;
  font-size:1rem;
  font-weight:700;
  color:var(--foreground);
`;

export const Description = styled.p`
  margin:0;
  font-size:0.9rem;
  color:var(--muted-foreground);
  margin-top:4px;
`;

export const RightTopRow = styled.div`
  display:flex;
  gap: 8px;
  align-items:center;
`;

export const CheckWrapper = styled.div`
  color: rgba(60, 220, 40, 0.8);
`;

export const TypeTag = styled.div<{ $type: string }>`
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-weight:700;
  font-size:0.8rem;
  color: white;
  background: ${({ $type }) => ($type === 'DAILY' ? 'var(--primary)' : $type === 'WEEKLY' ? 'var(--primary)' : 'rgba(255,255,255,0.06)')};
`;

export const ProgressText = styled.div`
  margin-top: 8px;
  font-size: 0.85rem;
  color: var(--muted-foreground);
  text-align: right;
`;

/* Bottom area */
export const BottomRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
  margin-top: 12px;
`;

export const RewardsGroup = styled.div`
  display:flex;
  gap: 12px;
  align-items:center;
`;

export const Reward = styled.div`
  display:flex;
  gap:6px;
  align-items:center;
  color:var(--muted-foreground);
  font-size:0.95rem;
`;

export const CollectButton = styled.button<{ $completed?: boolean }>`
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, var(--primary), rgba(255,154,0,0.8));
  color: #000;
  font-weight:700;
  cursor:pointer;

  &:disabled,
  &[aria-disabled='true'] {
    opacity:0.6;
    cursor:not-allowed;
  }

  &:hover {
    background: ${({ $completed }) =>
      $completed ? "linear-gradient(90deg,#ff9a00,#ff6a00);" : 
    "linear-gradient(90deg, rgba(255, 199, 0, 0.8), rgba(255,154,0,0.8))"};
  }
`;