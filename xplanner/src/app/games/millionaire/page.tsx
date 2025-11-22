'use client';

import { useState, useEffect } from 'react'; // Importe useEffect
import { Sidebar } from '@/components/Sidebar';
import { SkipForward, SquareStack, HandCoins, CheckCircle } from 'lucide-react';
import { millionaireQuestions } from './mockData';
// 1. Importe o novo componente do modal
import { CardsHelpModal } from '@/components/Milionaire/CardsHelpModal';
import * as S from './styles';

type GameState = 'playing' | 'won' | 'lost' | 'stopped';

export default function MillionaireGamePage() {
  // --- ESTADOS ---
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerConfirmed, setIsAnswerConfirmed] = useState(false);
  const [gameState, setGameState] = useState<GameState>('playing');
  const [accumulatedPrize, setAccumulatedPrize] = useState(0);
  
  const [hasUsedSkip, setHasUsedSkip] = useState(false);
  const [hasUsedCards, setHasUsedCards] = useState(false);

  // 2. Novos estados para o modal e para as opções eliminadas
  const [isCardsModalOpen, setIsCardsModalOpen] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);

  // --- DADOS COMPUTADOS ---
  const currentQuestion = millionaireQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === millionaireQuestions.length - 1;
  
  const prizeToWin = currentQuestion.cashPrize;
  const prizeToStop = accumulatedPrize;
  const prizeIfWrong = accumulatedPrize > 0 ? Math.floor(accumulatedPrize * 0.1) : 0; 

  // --- EFEITOS ---
  // Reseta as opções eliminadas quando muda de pergunta
  useEffect(() => {
    setEliminatedOptions([]);
  }, [currentQuestionIndex]);

  // --- FUNÇÕES DE LÓGICA ---

  const handleOptionSelect = (index: number) => {
    // Impede selecionar se já confirmou, se o jogo não está rolando OU SE A OPÇÃO FOI ELIMINADA
    if (isAnswerConfirmed || gameState !== 'playing' || eliminatedOptions.includes(index)) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswerConfirmed) return;

    setIsAnswerConfirmed(true);

    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setTimeout(() => {
        if (isLastQuestion) {
          setGameState('won');
          setAccumulatedPrize(prizeToWin);
        } else {
          setAccumulatedPrize(prizeToWin);
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedOption(null);
          setIsAnswerConfirmed(false);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        setGameState('lost');
        setAccumulatedPrize(prizeIfWrong);
      }, 2000);
    }
  };

  const handleStopGame = () => {
    setGameState('stopped');
  };

  const handleSkip = () => {
    if (hasUsedSkip || isAnswerConfirmed || isLastQuestion) return;
    setHasUsedSkip(true);
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedOption(null);
  };

  // 3. Funções para abrir o modal e processar o resultado das cartas
  const handleOpenCardsModal = () => {
    if (hasUsedCards || isAnswerConfirmed) return;
    setIsCardsModalOpen(true);
  };

  const handleCardsResult = (eliminatedCount: number) => {
    setHasUsedCards(true); // Marca a ajuda como usada

    if (eliminatedCount === 0) return; // Se sorteou 0, não faz nada

    // Encontra todos os índices das respostas ERRADAS
    const wrongOptionIndices = currentQuestion.options
      .map((_, index) => index)
      .filter(index => index !== currentQuestion.correctAnswerIndex);

    // Embaralha os índices errados para eliminar aleatoriamente
    const shuffledWrongIndices = wrongOptionIndices.sort(() => Math.random() - 0.5);

    // Pega os primeiros 'eliminatedCount' índices para eliminar
    const indicesToEliminate = shuffledWrongIndices.slice(0, eliminatedCount);
    
    setEliminatedOptions(indicesToEliminate);
  };


  const getOptionState = (index: number) => {
    // Se a opção foi eliminada, ela fica com um estado visual diferente (disabled)
    if (eliminatedOptions.includes(index)) {
        return 'disabled'; 
    }
    if (!isAnswerConfirmed) {
      return selectedOption === index ? 'selected' : 'default';
    }
    if (index === currentQuestion.correctAnswerIndex) {
      return 'correct';
    }
    if (index === selectedOption) {
      return 'wrong';
    }
    return 'default';
  };

  // --- RENDERIZAÇÃO ---
  if (gameState !== 'playing') {
    // ... (Tela de fim de jogo - sem alterações) ...
    return (
        // ... (código da tela de fim de jogo que você já tem)
        <S.PageContainer>
        <Sidebar />
        <S.GameArea style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem' }}>
            {gameState === 'won' && 'PARABÉNS! VOCÊ É UM MILIONÁRIO!'}
            {gameState === 'lost' && 'Que pena! Você errou.'}
            {gameState === 'stopped' && 'Jogo Encerrado.'}
          </h1>
          <h2 style={{ color: 'white', fontSize: '2rem', margin: '2rem 0' }}>
            Seu prêmio final: <br/>
            <span style={{ color: '#FFC700', fontSize: '4rem' }}>R$ {accumulatedPrize.toLocaleString('pt-BR')}</span>
          </h2>
          <h3 style={{color: '#22c55e'}}>+ {currentQuestion.xpPointsReward} XP Ganho!</h3>
          <S.ActionButton $variant="secondary" onClick={() => window.location.reload()} style={{marginTop: '3rem'}}>
             Jogar Novamente
          </S.ActionButton>
        </S.GameArea>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <Sidebar />

      <S.GameArea>
        
        <S.HeaderBar>
            <S.HelpButton disabled={hasUsedSkip || isAnswerConfirmed || isLastQuestion} onClick={handleSkip}>
              <SkipForward size={20} /> PULAR
            </S.HelpButton>

            <S.CurrentPrizeDisplay>
              <S.PrizeLabel>Pergunta valendo</S.PrizeLabel>
              <S.PrizeValue>R$ {prizeToWin.toLocaleString('pt-BR')}</S.PrizeValue>
            </S.CurrentPrizeDisplay>

            {/* 4. Botão Cartas agora abre o modal */}
            <S.HelpButton disabled={hasUsedCards || isAnswerConfirmed} onClick={handleOpenCardsModal}>
              <SquareStack size={20} /> CARTAS
            </S.HelpButton>
        </S.HeaderBar>


        <S.QuestionContainer>
          <S.QuestionText>
            {currentQuestion.questionText}
          </S.QuestionText>

          <S.OptionsGrid>
            {currentQuestion.options.map((option, index) => {
              const letters = ['A', 'B', 'C', 'D'];
              const isEliminated = eliminatedOptions.includes(index);

              return (
                <S.OptionButton
                  key={index}
                  $state={getOptionState(index)}
                  onClick={() => handleOptionSelect(index)}
                  // Desabilita o botão se já confirmou OU se foi eliminado
                  disabled={isAnswerConfirmed || isEliminated}
                  // Adiciona um estilo visual para opções eliminadas
                  style={isEliminated ? { opacity: 0.3, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}}
                >
                  <div className="option-letter-container">
                    {letters[index]}
                  </div>
                  {/* Se foi eliminado, remove o texto da opção */}
                  {isEliminated ? '---' : option}
                </S.OptionButton>
              );
            })}
          </S.OptionsGrid>
        </S.QuestionContainer>

        <S.FooterBar>
          {/* ... (Rodapé sem alterações) ... */}
          <S.PrizeBoxesContainer>
            <S.PrizeBox $variant="error">
              <S.BoxLabel>Errar</S.BoxLabel>
              <S.BoxValue>R$ {prizeIfWrong.toLocaleString('pt-BR')}</S.BoxValue>
            </S.PrizeBox>
            <S.PrizeBox $variant="stop">
              <S.BoxLabel>Parar</S.BoxLabel>
              <S.BoxValue>R$ {prizeToStop.toLocaleString('pt-BR')}</S.BoxValue>
            </S.PrizeBox>
            <S.PrizeBox $variant="success">
              <S.BoxLabel>Acertar</S.BoxLabel>
              <S.BoxValue>R$ {prizeToWin.toLocaleString('pt-BR')}</S.BoxValue>
            </S.PrizeBox>
          </S.PrizeBoxesContainer>

          <S.ActionsBar>
             <S.ActionButton 
                $variant="danger" 
                disabled={hasUsedSkip || isAnswerConfirmed || isLastQuestion} 
                onClick={handleSkip}
             >
                <SkipForward size={24} /> PULAR
             </S.ActionButton>

             <S.ActionButton 
                $variant="secondary" 
                disabled={accumulatedPrize === 0 || isAnswerConfirmed}
                onClick={handleStopGame}
             >
                <HandCoins size={24} /> PARAR
             </S.ActionButton>

             <S.ActionButton 
                $variant="primary"
                disabled={selectedOption === null || isAnswerConfirmed}
                onClick={handleConfirmAnswer}
             >
                <CheckCircle size={24} /> 
                {isAnswerConfirmed ? 'VERIFICANDO...' : 'CONFIRMAR'}
             </S.ActionButton>
          </S.ActionsBar>
        </S.FooterBar>

      </S.GameArea>

      <S.HostArea>
        <div className="host-container">
            <div className="avatar-placeholder" />
            <h3>Apresentador XP</h3>
            <p>(Em breve)</p>
        </div>
      </S.HostArea>

      {/* 5. Renderiza o Modal aqui no final */}
      <CardsHelpModal 
        isOpen={isCardsModalOpen}
        onClose={() => setIsCardsModalOpen(false)}
        onCardSelected={handleCardsResult}
      />

    </S.PageContainer>
  );
}