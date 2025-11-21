'use client';

import { Bell, UserCircle } from 'lucide-react';
import * as S from './styles';

interface HomeHeaderProps {
  userName: string;
}

export function HomeHeader({ userName }: HomeHeaderProps) {
  return (
    <S.Container>
      <div>
        <S.WelcomeText>
          Hey, {userName}! <span className="wave">👋</span>
        </S.WelcomeText>
        <S.Subtitle>Aqui está sua saúde financeira hoje.</S.Subtitle>
      </div>
      
      <S.ActionsWrapper>
        <S.IconButton>
          <Bell className="icon" />
          {/* Bolinha de notificação */}
          <S.NotificationBadge />
        </S.IconButton>
        <S.IconButton>
          <UserCircle className="icon" />
        </S.IconButton>
      </S.ActionsWrapper>
    </S.Container>
  );
}