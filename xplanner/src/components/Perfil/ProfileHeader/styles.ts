'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(to bottom right, #18181b, rgba(88, 28, 135, 0.2), #09090b); // zinc-900, purple-900/20, zinc-950
  padding: 3rem 1.5rem 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const PageTitle = styled.h1`
  font-size: 1.875rem; // 3xl
  color: white;
  font-weight: 700;
`;

export const SettingsButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #27272a; // zinc-800
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3f3f46; // zinc-700
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Avatar = styled.div`
  width: 7rem; // 28
  height: 7rem;
  background: linear-gradient(to bottom right, #a855f7, #ec4899, #f59e0b); // purple, pink, amber
  border-radius: 1.5rem; // rounded-3xl
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.75rem; // 6xl
  box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.3); // shadow-purple-500/30
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to right, #f59e0b, #ea580c); // amber-500, orange-500
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LevelBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: linear-gradient(to right, #f59e0b, #ea580c); // amber-500, orange-500
  border-radius: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem; // sm
  color: black;
  font-weight: 600;
  border: 4px solid #09090b; // zinc-950
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const UserName = styled.h2`
  font-size: 1.5rem; // 2xl
  color: white;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

export const UserTitle = styled.p`
  color: #c084fc; // purple-400
  margin-bottom: 0.5rem;
`;

export const MemberSince = styled.p`
  color: #71717a; // zinc-500
  font-size: 0.875rem; // sm
`;