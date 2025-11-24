import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--card-bg, #242424);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border-color, #3f3f3f);
  display: flex;
  flex-direction: column;
  /* Altura mínima para garantir que o gráfico tenha espaço para renderizar */
  min-height: 350px; 
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--text-primary, #ffffff);
  margin-bottom: 24px;
`;

export const ChartWrapper = styled.div`
  flex: 1;
  width: 100%;
  min-height: 250px; // Garante altura para o ResponsiveContainer
  display: flex;
  justify-content: center;
  align-items: center;

  // Estilização da legenda do Recharts para combinar com o tema dark
  .recharts-legend-item-text {
    color: var(--text-secondary, #a0a0a0) !important;
  }
`;

export const EmptyState = styled.div`
  color: var(--text-secondary, #a0a0a0);
  font-size: 14px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

// Estilos do Tooltip
export const TooltipContainer = styled.div`
  background-color: var(--bg-secondary, #1a1a1a);
  border: 1px solid var(--border-color, #3f3f3f);
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
`;

export const TooltipLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const TooltipValue = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary, #ffffff);
`;