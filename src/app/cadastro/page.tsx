'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
// 1. Importe o hook useRouter do Next.js para navegação
import { useRouter } from 'next/navigation';
// 2. Importe a função toast da biblioteca sonner
import { toast } from 'sonner';
import * as S from './styles';

const AVATAR_OPTIONS = [
  // ... (seus avatares)
  { id: 'fox', emoji: '🦊', label: 'Raposa' },
  { id: 'money-face', emoji: '🤑', label: 'Cara de Dinheiro' },
  { id: 'rocket', emoji: '🚀', label: 'Foguete' },
  { id: 'lion', emoji: '🦁', label: 'Leão' },
  { id: 'cool', emoji: '😎', label: 'Estiloso' },
  { id: 'target', emoji: '🎯', label: 'Na mosca' },
];

export default function CadastroPage() {
  // 3. Inicialize o router
  const router = useRouter();
  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [selectedAvatarId, setSelectedAvatarId] = useState(AVATAR_OPTIONS[0]?.id);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ... (lógica de máscara do CPF permanece igual)
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    setCpf(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!name || cpf.length < 14 || !birthYear || !selectedAvatarId) {
      // 4. Substitua o alert de erro por toast.error
      toast.error('Por favor, preencha todos os campos corretamente.');
      return;
    }

    const formData = {
      name,
      cpf: cpf.replace(/\D/g, ''),
      birthYear: parseInt(birthYear),
      avatarId: selectedAvatarId,
    };

    console.log('Dados do cadastro:', formData);
    
    // Simulação de uma chamada de API (opcional, para dar um tempo antes de redirecionar)
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // 5. Substitua o alert de sucesso por toast.success
    toast.success('Cadastro simulado com sucesso! Redirecionando...');

    // 6. Redirecione para a página de login após um breve delay
    // O delay permite que o usuário leia a notificação antes da página mudar.
    setTimeout(() => {
      router.push('/login');
    }, 2000); // 2 segundos de delay
  };

  return (
    // ... (O restante do JSX permanece EXATAMENTE o mesmo)
    <S.Container>
      <S.ContentWrapper>
        <S.Header>
          <Image
            src="/assets/logo-xplanner.png" 
            alt="XPlanner Logo"
            width={340}
            height={150}
            priority
          />
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Comece sua jornada para dominar sua grana.</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
           <S.FormGroup>
            <S.Label htmlFor="name">Nome Completo</S.Label>
            <S.Input
              id="name"
              type="text"
              placeholder="Ex: João Silva"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="cpf">CPF</S.Label>
            <S.Input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCpfChange}
              maxLength={14}
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label htmlFor="birthYear">Ano de Nascimento</S.Label>
            <S.Input
              id="birthYear"
              type="number"
              placeholder="Ex: 2004"
              min="1900"
              max={new Date().getFullYear()}
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              required
            />
          </S.FormGroup>

          <S.AvatarSelectionSection>
            <S.Label>Escolha seu Avatar</S.Label>
            <S.AvatarGrid>
              {AVATAR_OPTIONS.map((avatar) => (
                <S.AvatarOption
                  key={avatar.id}
                  type="button"
                  $isSelected={selectedAvatarId === avatar.id}
                  onClick={() => setSelectedAvatarId(avatar.id)}
                  aria-label={avatar.label}
                >
                  <span role="img" aria-hidden="true" style={{ fontSize: '3.5rem' }}>
                    {avatar.emoji}
                  </span>
                </S.AvatarOption>
              ))}
            </S.AvatarGrid>
          </S.AvatarSelectionSection>

          <S.SubmitButton type="submit">
            Finalizar Cadastro
          </S.SubmitButton>
        </S.Form>

        <S.FooterLinks>
          Já tem uma conta? <S.StyledLink href="/login">Entrar</S.StyledLink>
        </S.FooterLinks>
      </S.ContentWrapper>
    </S.Container>
  );
}