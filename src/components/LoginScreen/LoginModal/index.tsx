'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { X, Mail, Lock } from 'lucide-react';
import { toast } from 'sonner'; // Importando o toast da biblioteca sonner
import * as S from './styles';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    console.log('Tentativa de login simulada com:', { email, password });

    // Simulando uma chamada de API (opcional, para dar um tempo de loading)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mensagem de sucesso e redirecionamento
    toast.success('Login realizado com sucesso! Redirecionando...', {
      description: 'Bem-vindo de volta!',
      duration: 1300,
    });

    setTimeout(() => {
      router.push('/home');
      onClose();
      setIsLoading(false);
    }, 1500); // Pequeno delay para o usuário ler o toast
  };

  // Fecha o modal se clicar fora do conteúdo
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.Title>Acesse sua conta</S.Title>
          <S.CloseButton onClick={onClose} aria-label="Fechar">
            <X size={24} />
          </S.CloseButton>
        </S.ModalHeader>

        <S.Content>
          <S.Form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="email">E-mail</S.Label>
              <S.InputWrapper>
                <Mail size={20} />
                <S.Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </S.InputWrapper>
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="password">Senha</S.Label>
              <S.InputWrapper>
                <Lock size={20} />
                <S.Input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </S.InputWrapper>
            </S.FormGroup>

            <S.ForgotPasswordLink href="#">Esqueci minha senha</S.ForgotPasswordLink>

            <S.LoginButton type="submit" disabled={isLoading}>
              {isLoading ? 'Entrando...' : 'Entrar'}
            </S.LoginButton>
          </S.Form>

          {/* Mensagem explicativa do protótipo */}
          <S.PrototypeNotice>
            <strong>Nota do Protótipo:</strong> A autenticação real não está
            implementada. Insira qualquer e-mail e senha para acessar a tela inicial.
          </S.PrototypeNotice>
        </S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
};