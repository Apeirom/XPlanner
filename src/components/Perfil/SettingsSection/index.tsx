'use client';

// Importa a interface da prop
import { SettingsSectionProps } from '@/app/perfil/mockData';
import * as S from './styles';

// O componente agora recebe 'settings' e 'onLogout' via props
export function SettingsSection({ settings, onLogout }: SettingsSectionProps) {
  return (
    <S.SectionContainer>
      {/* ... (restante do código igual, usando 'settings.map' e 'onLogout') */}
      <S.SectionTitle>Configurações</S.SectionTitle>
      
      <S.SettingsList>
        {settings.map((item) => (
          <S.SettingItem key={item.label}>
            <S.SettingLabel>{item.label}</S.SettingLabel>
            <S.SettingValue>{item.value}</S.SettingValue>
          </S.SettingItem>
        ))}
      </S.SettingsList>

      {/* Chama a função onLogout passada via prop */}
      <S.LogoutButton onClick={onLogout}>
        Sair da Conta
      </S.LogoutButton>
    </S.SectionContainer>
  );
}