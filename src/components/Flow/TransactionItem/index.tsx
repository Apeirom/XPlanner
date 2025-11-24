import { useState } from 'react';
import { Edit2, Check, X } from 'lucide-react';
import { Transaction } from '@/app/flow/mockData';
import * as S from './styles';

interface TransactionItemProps {
  transaction: Transaction;
  onUpdate: (updatedTransaction: Transaction) => void;
}

export const TransactionItem = ({ transaction, onUpdate }: TransactionItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(transaction.description);
  const [editedCategory, setEditedCategory] = useState(transaction.category);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate({
      ...transaction,
      description: editedDescription,
      category: editedCategory,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedDescription(transaction.description);
    setEditedCategory(transaction.category);
    setIsEditing(false);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  return (
    <S.Container>
      <S.Date>{formatDate(transaction.date)}</S.Date>
      <S.Details>
        {isEditing ? (
          <>
            <S.Input
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Descrição"
            />
            <S.Input
              value={editedCategory}
              onChange={(e) => setEditedCategory(e.target.value)}
              placeholder="Categoria"
            />
          </>
        ) : (
          <>
            <S.Description>{transaction.description}</S.Description>
            <S.Category>{transaction.category}</S.Category>
          </>
        )}
      </S.Details>
      <S.Amount $type={transaction.type}>
        {transaction.type === 'expense' ? '-' : '+'} {formatCurrency(transaction.amount)}
      </S.Amount>
      <S.Actions>
        {isEditing ? (
          <>
            <S.ActionButton onClick={handleSave}>
              <Check size={16} />
            </S.ActionButton>
            <S.ActionButton onClick={handleCancel}>
              <X size={16} />
            </S.ActionButton>
          </>
        ) : (
          <S.ActionButton onClick={handleEdit}>
            <Edit2 size={16} />
          </S.ActionButton>
        )}
      </S.Actions>
    </S.Container>
  );
};