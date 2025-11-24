'use client';

import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react';
import { TrilhaData, getStepIcon } from '@/app/trilhas/mockData';
import * as S from './styles';

interface TrilhaDetailProps {
  trilha: TrilhaData;
  onBack: () => void;
}

export function TrilhaDetail({ trilha, onBack }: TrilhaDetailProps) {
  return (
    <S.Container>
      {/* Cabeçalho Colorido */}
      <S.DetailHeader $gradient={trilha.gradient}>
        <S.BackButton onClick={onBack}>
          <ArrowLeft className="icon" /> Voltar
        </S.BackButton>
        
        <S.HeaderContent>
          <S.HeaderIcon>{trilha.iconChar}</S.HeaderIcon>
          <S.HeaderInfo>
            <S.HeaderTitle>{trilha.title}</S.HeaderTitle>
            <S.HeaderDescription>{trilha.description}</S.HeaderDescription>
            <S.HeaderMeta>
              {trilha.completedSteps} de {trilha.steps} passos • {trilha.progress}% completo
            </S.HeaderMeta>
            
            <S.HeaderProgressBarContainer>
              <S.HeaderProgressBarFill $percentage={trilha.progress} />
            </S.HeaderProgressBarContainer>
          </S.HeaderInfo>
        </S.HeaderContent>
      </S.DetailHeader>

      {/* Lista de Passos */}
      <S.StepsListContainer>
        {trilha.stepsDetail.map((step, index) => {
          // Lógica para determinar o estado do passo
          const isCompleted = step.completed;
          // O próximo passo a ser feito é o primeiro que não está completo
          const isCurrent = !isCompleted && index === trilha.completedSteps;
          const isLocked = !isCompleted && !isCurrent;

          // Pega o ícone correto usando o helper
          const IconComponent = getStepIcon(step.type);

          return (
            <S.StepCard 
              key={step.id} 
              $status={isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}
              disabled={isLocked} // Desabilita o clique se estiver bloqueado
            >
              <S.StepIconWrapper $status={isCompleted ? 'completed' : isCurrent ? 'current' : 'locked'}>
                {isCompleted ? (
                  <CheckCircle2 className="icon-check" />
                ) : isLocked ? (
                  <Lock className="icon-lock" />
                ) : (
                  <IconComponent className="icon-type" />
                )}
              </S.StepIconWrapper>

              <S.StepInfo>
                <S.StepTitle $isCompleted={isCompleted}>{step.title}</S.StepTitle>
                <S.StepType>{step.type}</S.StepType>
              </S.StepInfo>

              {isCompleted && <S.XpBadge>+{step.xp} XP</S.XpBadge>}
            </S.StepCard>
          );
        })}
      </S.StepsListContainer>
    </S.Container>
  );
}