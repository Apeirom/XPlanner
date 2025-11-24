import { useState } from 'react';
import { X } from 'lucide-react';
import { Goal } from '@/app/flow/mockData';
import * as S from './styles';

interface AllocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  onConfirm: (goalId: string, amount: number) => void;
  goals: Goal[];
}

export const AllocationModal = ({ isOpen, onClose, balance, onConfirm, goals }: AllocationModalProps) => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    const numericAmount = parseFloat(amount);
    if (selectedGoal && !isNaN(numericAmount) && numericAmount > 0 && numericAmount <= balance) {
      onConfirm(selectedGoal, numericAmount);
      onClose();
      setSelectedGoal('');
      setAmount('');
    } else {
      alert('Por favor, selecione uma meta e um valor válido (até o saldo disponível).');
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <S.Overlay>
      <S.Modal>
        <S.Header>
          <S.Title>Alocar Saldo</S.Title>
          <S.CloseButton onClick={onClose}>
            <X size={24} />
          </S.CloseButton>
        </S.Header>
        <S.Content>
          <S.BalanceInfo>
            Saldo Disponível: <strong>{formatCurrency(balance)}</strong>
          </S.BalanceInfo>
          <S.FormGroup>
            <S.Label>Selecione a Meta</S.Label>
            <S.Select value={selectedGoal} onChange={(e) => setSelectedGoal(e.target.value)}>
              <option value="">Selecione uma meta</option>
              {goals.map((goal) => (
                <option key={goal.id} value={goal.id}>
                  {goal.name}
                </option>
              ))}
            </S.Select>
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>Valor a Alocar</S.Label>
            <S.Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="R$ 0,00"
              max={balance}
            />
          </S.FormGroup>
        </S.Content>
        <S.Footer>
          {/* Botões estilizados localmente */}
          <S.CancelButton onClick={onClose}>
            Cancelar
          </S.CancelButton>
          <S.ConfirmButton onClick={handleConfirm}>
            Confirmar Alocação
          </S.ConfirmButton>
        </S.Footer>
      </S.Modal>
    </S.Overlay>
  );
};