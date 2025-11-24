'use client';

// 1. IMPORTANTE: Importe useState e useEffect
import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import * as S from './styles';

interface UserProfileHeaderProps {
  level: number;
  title: string;
  currentXP: number;
  nextLevelXP: number;
  streakDays: number;
  avatarEmoji?: string;
  isLoading?: boolean;
}

export function UserProfileHeader({
  level = 3,
  title = 'Novato Financeiro',
  currentXP = 2340,
  nextLevelXP = 3000,
  streakDays = 7,
  avatarEmoji = '🦊',
  isLoading = false,
}: UserProfileHeaderProps) {
  // O cálculo da porcentagem ALVO (onde queremos chegar)
  const targetPercentage = (currentXP / nextLevelXP) * 100;

  // 2. Estado para controlar a animação. Começa SEMPRE em 0.
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // 3. Effect para disparar a animação após o componente montar
  useEffect(() => {
    // Se estiver carregando, mantemos em 0 para não animar esqueletos.
    // Agendamos a atualização de forma assíncrona para evitar renderizações em cascata.
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (isLoading) {
      timer = setTimeout(() => {
        setAnimatedProgress(0);
      }, 0);

      return () => {
        if (timer) clearTimeout(timer);
      };
    }

    // Usamos um pequeno timeout (100ms).
    // Isso dá tempo ao navegador para renderizar a barra em 0% primeiro.
    // Quando o estado muda para 'targetPercentage', a transição CSS ocorre.
    timer = setTimeout(() => {
      setAnimatedProgress(targetPercentage);
    }, 100);

    // Limpa o timer se o componente desmontar ou os valores mudarem rapidamente
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [targetPercentage, isLoading]); // Re-executa se o XP alvo mudar ou se parar de carregar

  return (
    <S.Container>
      <S.HeaderContent>
        <S.AvatarWrapper>
          {isLoading ? (
            <S.SkeletonAvatar />
          ) : (
            <>
              <S.AvatarContainer>
                <span className="emoji">{avatarEmoji}</span>
              </S.AvatarContainer>
              <S.LevelBadge>
                <span>{level}</span>
              </S.LevelBadge>
            </>
          )}
        </S.AvatarWrapper>

        <S.UserInfo>
          <S.TopInfo>
            <div>
              {isLoading ? (
                <>
                  <S.SkeletonTextLine $width="4rem" $height="0.875rem" />
                  <S.SkeletonTextLine $width="10rem" $height="1.5rem" />
                </>
              ) : (
                <>
                  <S.LevelText>Nível {level}</S.LevelText>
                  <S.TitleText>{title}</S.TitleText>
                </>
              )}
            </div>
            
            {isLoading ? (
               <S.SkeletonBadge />
            ) : (
               <S.StreakBadge>
                 <Flame className="w-5 h-5 text-orange-500" />
                 <span>{streakDays}</span>
               </S.StreakBadge>
            )}
          </S.TopInfo>
          
          <S.ProgressWrapper>
            {isLoading ? (
               <>
                 <S.TopInfo>
                   <S.SkeletonTextLine $width="3rem" $height="0.75rem" />
                   <S.SkeletonTextLine $width="3rem" $height="0.75rem" />
                 </S.TopInfo>
                 <S.SkeletonProgressBar />
               </>
            ) : (
              <>
                <S.ProgressLabels>
                  <span className="current">{currentXP.toLocaleString()} XP</span>
                  <span className="next">{nextLevelXP.toLocaleString()} XP</span>
                </S.ProgressLabels>
                
                {/* 4. IMPORTANTE: Usamos o estado ANIMADO aqui, não o cálculo direto */}
                <S.StyledProgress value={animatedProgress} />
              </>
            )}
          </S.ProgressWrapper>
        </S.UserInfo>
      </S.HeaderContent>
    </S.Container>
  );
}