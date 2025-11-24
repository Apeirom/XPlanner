import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary, #a0a0a0);
`;

export const TrendIcon = styled.span<{ $type: 'income' | 'expense' }>`
  color: ${({ $type }) => ($type === 'income' ? 'var(--success-color, #2ecc71)' : 'var(--error-color, #e74c3c)')};
`;

export const Value = styled.div<{ $type: 'income' | 'expense' | 'balance' }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ $type }) => {
    if ($type === 'income') return 'var(--success-color, #2ecc71)';
    if ($type === 'expense') return 'var(--error-color, #e74c3c)';
    return 'var(--text-primary, #ffffff)';
  }};
`;