import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
  margin-bottom: 16px;
`;

export const List = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--bg-secondary, #1a1a1a);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-color, #3f3f3f);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--text-secondary, #a0a0a0);
  }
`;