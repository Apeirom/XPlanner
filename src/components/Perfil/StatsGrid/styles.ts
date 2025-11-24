'use client';

import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem; // gap-3
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  position: relative;
  z-index: 10;
`;

export const StatCard = styled.div`
  background-color: rgba(24, 24, 27, 0.5); // zinc-900/50
  border: 1px solid #27272a; // zinc-800
  border-radius: 1rem; // rounded-2xl
  padding: 1rem;
`;

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.p`
  color: #a1a1aa; // zinc-400
  font-size: 0.75rem; // xs
`;

export const StatValue = styled.p`
  color: white;
  font-size: 1.5rem; // 2xl
  font-weight: 600;
`;