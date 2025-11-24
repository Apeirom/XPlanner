// src/components/Home/QuickActionsAside/index.tsx
'use client';

// Importamos o tipo dos dados
import { QuickActionType } from '@/app/home/mockData';
import * as S from './styles';

// Definimos a interface das props
interface QuickActionsAsideProps {
  actions: QuickActionType[];
}

// O componente agora recebe 'actions' como prop
export function QuickActionsAside({ actions }: QuickActionsAsideProps) {
  return (
    <S.Container>
      {/* Título traduzido */}
      <S.Title>Próximas Ações</S.Title>
      
      <S.ActionsList>
        {/* Mapeamos os dados recebidos via prop */}
        {actions.map((action) => (
          <S.ActionCard key={action.id}>
            <S.CardTitle>{action.title}</S.CardTitle>
            <S.CardDescription>
              {action.description}
            </S.CardDescription>
            
            {/* Renderização condicional do botão baseado na variante */}
            {action.buttonVariant === 'primary' ? (
              <S.PrimaryButton>{action.buttonText}</S.PrimaryButton>
            ) : (
              <S.SecondaryButton>{action.buttonText}</S.SecondaryButton>
            )}
          </S.ActionCard>
        ))}
      </S.ActionsList>
    </S.Container>
  );
}