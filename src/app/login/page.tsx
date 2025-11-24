  // src/components/screens/LoginScreen/index.tsx
  'use client';

  import Image from 'next/image';
  import { useRouter } from 'next/navigation';
  import { Gamepad2, TrendingUp, Sparkles, Chrome } from 'lucide-react';
  import * as S from './styles';

  export function LoginScreen() {
    const router = useRouter();

    const handleLoginAction = (provider?: 'google' | 'apple') => {
      console.log('Tentativa de login:', provider ? `via ${provider}` : 'email/senha');
    
    // --- AQUI ACONTECE A MÁGICA ---
    // Em um cenário real, você faria a autenticação aqui (ex: chamar Firebase/Auth0).
    // Se der certo, você redireciona.
    
    // Como é um protótipo/hackathon, vamos redirecionar diretamente para a home.
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
                priority // Carrega com prioridade
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
            <S.PrimaryButton onClick={() => handleLoginAction()}>
              Criar Conta
            </S.PrimaryButton>
            
            <S.SecondaryButton onClick={() => handleLoginAction()}>
              Entrar
            </S.SecondaryButton>

            {/* Login Social */}
            <S.SocialLoginWrapper>
              <S.SocialButton onClick={() => handleLoginAction('google')}>
                <Chrome className="icon mr-2" />
                Google
              </S.SocialButton>
              <S.SocialButton onClick={() => handleLoginAction('apple')}>
                {/* SVG Inline da Apple com a classe correta */}
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
      </S.Container>
    );
  }

  export default LoginScreen;