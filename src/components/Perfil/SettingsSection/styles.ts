'use client';

import styled from 'styled-components';

export const SectionContainer = styled.section`
  padding: 0 1.5rem 1.5rem; // pb-6
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem; // xl
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // space-y-2
`;

export const SettingItem = styled.button`
  width: 100%;
  background-color: rgba(24, 24, 27, 0.5); // zinc-900/50
  border: 1px solid #27272a; // zinc-800
  border-radius: 1rem; // rounded-2xl
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #27272a; // zinc-800
  }
`;

export const SettingLabel = styled.p`
  color: white;
  margin-bottom: 0.25rem;
`;

export const SettingValue = styled.p`
  color: #a1a1aa; // zinc-400
  font-size: 0.875rem; // sm
`;

export const LogoutButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: rgba(127, 29, 29, 0.2); // red-900/20
  border: 1px solid rgba(239, 68, 68, 0.3); // red-500/30
  border-radius: 1rem; // rounded-2xl
  padding: 1rem;
  color: #f87171; // red-400
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(127, 29, 29, 0.3); // red-900/30
  }
`;