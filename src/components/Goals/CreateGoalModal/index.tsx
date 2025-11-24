// src/components/Goals/CreateGoalModal/index.tsx
'use client';

import { useState, FormEvent } from 'react';
import { X, Check, Coins, Calendar, Target, Wallet } from 'lucide-react';
import * as S from './styles';

interface CreateGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Lista de emojis pré-definidos para o seletor
const EMOJI_OPTIONS = ['✈️', '🏠', '🚗', '🎓', '💍', '👶', '💻', '🚲', '🏖️', '🏥'];

export function CreateGoalModal({ isOpen, onClose }: CreateGoalModalProps) {
  // Estados para controlar os inputs do formulário
  const [name, setName] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [initialInvestment, setInitialInvestment] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(EMOJI_OPTIONS[0]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica real de enviar para o backend
    console.log({
      name,
      targetValue,
      deadlineDate,
      initialInvestment,
      selectedIcon
    });
    // Limpar formulário e fechar modal
    setName('');
    setTargetValue('');
    setDeadlineDate('');
    setInitialInvestment('');
    onClose();
  };

  // Fecha o modal se clicar no overlay (fora do conteúdo)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>Criar Nova Meta</S.Title>
          <S.CloseButton onClick={onClose}>
            <X size={24} />
          </S.CloseButton>
        </S.ModalHeader>

        <S.Form onSubmit={handleSubmit}>
          {/* --- Nome da Meta --- */}
          <S.FormGroup>
            <S.Label htmlFor="goalName">
              <Target size={16} /> Nome da Meta
            </S.Label>
            <S.Input
              id="goalName"
              type="text"
              placeholder="Ex: Viagem para o Japão"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.FlexRow>
            {/* --- Valor Total --- */}
            <S.FormGroup style={{ flex: 1 }}>
              <S.Label htmlFor="targetValue">
                <Coins size={16} /> Valor Total (R$)
              </S.Label>
              <S.Input
                id="targetValue"
                type="number"
                placeholder="0,00"
                min="0"
                step="0.01"
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
                required
              />
            </S.FormGroup>

             {/* --- Data Limite --- */}
            <S.FormGroup style={{ flex: 1 }}>
              <S.Label htmlFor="deadline">
                <Calendar size={16} /> Data Alvo
              </S.Label>
              <S.Input
                id="deadline"
                type="date"
                value={deadlineDate}
                onChange={(e) => setDeadlineDate(e.target.value)}
                required
              />
            </S.FormGroup>
          </S.FlexRow>

           {/* --- Investimento Inicial --- */}
          <S.FormGroup>
            <S.Label htmlFor="initialInvestment">
              <Wallet size={16} /> Investimento Inicial (do Saldo Líquido)
            </S.Label>
            <S.Input
              id="initialInvestment"
              type="number"
              placeholder="0,00"
              min="0"
              step="0.01"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
            />
            <S.HelperText>Valor disponível na sua conta corrente hoje.</S.HelperText>
          </S.FormGroup>

           {/* --- Seletor de Ícone --- */}
          <S.FormGroup>
            <S.Label>Escolha um ícone</S.Label>
            <S.EmojiGrid>
              {EMOJI_OPTIONS.map((emoji) => (
                <S.EmojiOption
                  key={emoji}
                  type="button"
                  $isSelected={selectedIcon === emoji}
                  onClick={() => setSelectedIcon(emoji)}
                >
                  {emoji}
                </S.EmojiOption>
              ))}
            </S.EmojiGrid>
          </S.FormGroup>

          <S.ModalFooter>
            <S.CancelButton type="button" onClick={onClose}>
              Cancelar
            </S.CancelButton>
            <S.ConfirmButton type="submit">
              <Check size={18} />
              Criar Meta
            </S.ConfirmButton>
          </S.ModalFooter>
        </S.Form>
      </S.ModalContainer>
    </S.Overlay>
  );
}