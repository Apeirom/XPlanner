// src/app/perfil/page.tsx
'use client';

import { Sidebar } from '@/components/Sidebar';
import { ProfileHeader } from '@/components/Perfil/ProfileHeader';
import { StatsGrid } from '@/components/Perfil/StatsGrid';
import { BadgesSection } from '@/components/Perfil/BadgesSection';
import { SettingsSection } from '@/components/Perfil/SettingsSection';
// Importa todos os dados necessários do mockData
import { 
  userProfileMock, 
  statsMock, 
  userBadgesMock, 
  settingsMock 
} from './mockData';
import * as S from './styles';

export default function PerfilPage() {
  // Função placeholder para o logout
  const handleLogout = () => {
    console.log('Logout solicitado');
    // Aqui entraria a lógica real de logout
  };

  return (
    <S.PageContainer>
      <Sidebar />

      <S.ContentArea>
        {/* Passa os dados do usuário via props */}
        <ProfileHeader user={userProfileMock} />
        
        {/* Passa os dados das estatísticas via props */}
        <StatsGrid stats={statsMock} />

        {/* Passa os dados das conquistas via props */}
        <BadgesSection badges={userBadgesMock} />

        {/* Passa os dados das configurações e a função de logout via props */}
        <SettingsSection settings={settingsMock} onLogout={handleLogout} />
      </S.ContentArea>
    </S.PageContainer>
  );
}