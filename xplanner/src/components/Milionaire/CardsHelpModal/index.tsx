'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import * as S from './styles';

interface CardsHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCardSelected: (eliminatedCount: number) => void;
}

export function CardsHelpModal({ isOpen, onClose, onCardSelected }: CardsHelpModalProps) {
  const [shuffledValues, setShuffledValues] = useState<number[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const baseValues = [0, 1, 2, 3];
      for (let i = baseValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baseValues[i], baseValues[j]] = [baseValues[j], baseValues[i]];
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShuffledValues(baseValues);
      setSelectedCardIndex(null);
      setIsRevealed(false);
    }
  }, [isOpen]);

  const handleCardClick = (index: number) => {
    if (isRevealed) return;
    setSelectedCardIndex(index);
    setIsRevealed(true);
  };

  const handleConfirm = () => {
    if (selectedCardIndex !== null) {
      const finalValue = shuffledValues[selectedCardIndex];
      onCardSelected(finalValue);
      onClose();
    }
  };

  // Função para lidar com o clique no overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Se já revelou, não faz nada (não fecha)
    if (isRevealed) return;
    
    // Fecha apenas se o clique foi diretamente no overlay (não dentro do modal)
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  if (!isOpen) return null;

  let buttonText = 'Escolha uma Carta';
  if (isRevealed && selectedCardIndex !== null) {
    const value = shuffledValues[selectedCardIndex];
    buttonText = `Confirmar (Eliminar ${value})`;
  }

  return (
    // 1. Adicionado onClick no Overlay para controlar o fechamento
    <S.Overlay onClick={handleOverlayClick}>
      {/* Adicionado onClick com stopPropagation no container para evitar que cliques dentro dele fechem o modal */}  
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        
        {/* 2. Botão de fechar desabilitado se já revelou */}
        <S.CloseButton onClick={onClose} disabled={isRevealed}>
          <X size={24} />
        </S.CloseButton>

        <S.Title>Sorteie uma carta!</S.Title>

        <S.CardsGrid>
          {/* ... (Mapeamento das cartas permanece igual) ... */}
          {shuffledValues.map((value, index) => {
            const isThisCardSelected = index === selectedCardIndex;
            return (
              <S.Card 
                key={index} 
                onClick={() => handleCardClick(index)} 
                $isRevealed={isRevealed}
                $isSelected={isThisCardSelected}
              >
                <S.CardContent className={isRevealed ? 'revealed' : ''}>
                  <div className="card-front">
                    <span className="label">ELIMINAR</span>
                    <span className="value">{value}</span>
                  </div>
                  <div className="card-back" />
                </S.CardContent>
              </S.Card>
            );
          })}
        </S.CardsGrid>

        <S.ConfirmButton 
          onClick={handleConfirm} 
          disabled={selectedCardIndex === null}
        >
          {buttonText}
        </S.ConfirmButton>
      </S.ModalContainer>
    </S.Overlay>
  );
}