import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(--card-bg, #242424);
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid var(--border-color, #3f3f3f);
`;

export const Date = styled.div`
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
  margin-right: 16px;
  min-width: 80px;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary, #ffffff);
`;

export const Category = styled.div`
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
`;

export const Input = styled.input`
  background-color: var(--bg-secondary, #1a1a1a);
  border: 1px solid var(--border-color, #3f3f3f);
  border-radius: 4px;
  padding: 8px;
  color: var(--text-primary, #ffffff);
  font-size: 14px;
  width: 100%;
  margin-bottom: 4px;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #f39c12);
  }
`;

export const Amount = styled.div<{ $type: 'income' | 'expense' }>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ $type }) => ($type === 'income' ? 'var(--success-color, #2ecc71)' : 'var(--error-color, #e74c3c)')};
  margin: 0 16px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary, #a0a0a0);
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: var(--bg-secondary, #1a1a1a);
    color: var(--text-primary, #ffffff);
  }
`;