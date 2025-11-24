'use client';

import { Settings, Edit2 } from 'lucide-react';
// Importa apenas a interface da prop
import { ProfileHeaderProps } from '@/app/perfil/mockData';
import * as S from './styles';

// O componente agora recebe 'user' via props
export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <S.HeaderContainer>
      {/* ... (restante do código igual, usando 'user.xxx') */}
      <S.TopBar>
        <S.PageTitle>Perfil</S.PageTitle>
        <S.SettingsButton>
          <Settings size={20} color="white" />
        </S.SettingsButton>
      </S.TopBar>

      <S.UserInfo>
        <S.AvatarContainer>
          <S.Avatar>{user.avatarUrl}</S.Avatar>
          <S.EditButton>
            <Edit2 size={16} color="black" />
          </S.EditButton>
          <S.LevelBadge>Nv. {user.level}</S.LevelBadge>
        </S.AvatarContainer>

        <S.UserName>{user.name}</S.UserName>
        <S.UserTitle>{user.title}</S.UserTitle>
        <S.MemberSince>Membro desde {user.memberSince}</S.MemberSince>

        
      </S.UserInfo>
    </S.HeaderContainer>
  );
}