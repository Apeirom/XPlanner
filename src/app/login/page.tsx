'use client';

import { useState } from 'react'; // 1. Importar useState
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Gamepad2, TrendingUp, Sparkles, Chrome } from 'lucide-react';
// 2. Importar o novo modal de login
import { LoginModal } from '@/components/LoginScreen/LoginModal';
import * as S from './styles';

export function LoginScreen() {
  const router = useRouter();
  // 3. Estado para controlar a visibilidade do modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  // Função original para "Criar Conta" e Social Login (redireciona direto)
  const handleDirectAction = (provider?: 'google' | 'apple') => {
    console.log('Ação direta (Cadastro/Social):', provider ? `via ${provider}` : 'Criar Conta');
    // Como é um protótipo, redireciona diretamente para a home.
    router.push('/home'); 
  };

  return (
    <S.Container>
      {/* Elementos Decorativos de Fundo */}
      <S.DecorativeBlurTop />
      <S.DecorativeBlurBottom />

      <S.ContentWrapper>
        {/* Seção da Logo e Marca */}
        <S.BrandSection>
          <S.LogoWrapper>
            <Image 
              src="/assets/logo-xplanner.png" 
              alt="Logo XPlanner" 
              width={340}
              height={150}
              priority
            />
          </S.LogoWrapper>
          <S.Tagline>
            Aprenda, jogue e domine sua grana com a XP.
          </S.Tagline>
        </S.BrandSection>

        {/* Destaque das Features */}
        <S.FeaturesGrid>
          <S.FeatureCard>
            <Gamepad2 className="icon" />
            <span>Jogos Divertidos</span>
          </S.FeatureCard>
          <S.FeatureCard>
            <TrendingUp className="icon" />
            <span>Aprenda Investindo</span>
          </S.FeatureCard>
          <S.FeatureCard>
            <Sparkles className="icon" />
            <span>Ganhe Recompensas</span>
          </S.FeatureCard>
        </S.FeaturesGrid>

        {/* Botões de Ação */}
        <S.ActionsSection>
          {/* Botão Criar Conta: continua com a ação direta */}
          <S.PrimaryButton onClick={() => router.push('/cadastro')}>
            Criar Conta
          </S.PrimaryButton>
          
          {/* 4. Botão Entrar: agora abre o modal */}
          <S.SecondaryButton onClick={handleOpenLoginModal}>
            Entrar
          </S.SecondaryButton>

          {/* Login Social: continua com a ação direta */}
          <S.SocialLoginWrapper>
            <S.SocialButton onClick={() => handleDirectAction('google')}>
              <Chrome className="icon mr-2" />
              Google
            </S.SocialButton>
            <S.SocialButton onClick={() => handleDirectAction('apple')}>
              <svg className="icon mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Apple
            </S.SocialButton>
          </S.SocialLoginWrapper>
        </S.ActionsSection>

        <S.TermsText>
          Ao continuar, você concorda com os Termos de Uso e Política de Privacidade
        </S.TermsText>
      </S.ContentWrapper>
      
      {/* 5. Renderiza o Modal de Login quando o estado for verdadeiro */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseLoginModal} 
      />
    </S.Container>
  );
}

export default LoginScreen;