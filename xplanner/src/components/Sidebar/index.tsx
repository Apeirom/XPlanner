// src/components/Sidebar/index.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Map, Target, Trophy, User } from 'lucide-react';
import * as S from './styles';

// Definindo os itens do menu para facilitar a iteração
const menuItems = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: Map, label: 'Trilhas', href: '/trilhas' },
  { icon: Target, label: 'Metas', href: '/metas' },
  { icon: Trophy, label: 'Desafios', href: '/desafios' },
  { icon: User, label: 'Perfil', href: '/perfil' },
];

export function Sidebar() {
  const pathname = usePathname(); // Hook para saber a rota atual

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image
          src="/assets/logo-xplanner.png" // Usando sua logo
          alt="XPlanner Logo"
          width={150}
          height={60}
          priority
        />
      </S.SidebarHeader>

      <S.SidebarNav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Verifica se a rota atual começa com o href do item
          const isActive = pathname?.startsWith(item.href);

          return (
            <Link href={item.href} key={item.href} >
              <S.NavItem $isActive={isActive}>
                <Icon className="icon" />
                <span className="label">{item.label}</span>
              </S.NavItem>
            </Link>
          );
        })}
      </S.SidebarNav>

      <S.SidebarFooter>
        <S.EcosystemButton href="https://www.xpi.com.br/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/xp-investimentos-logo.png"
            alt="XP Inc."
            width={20}
            height={20}
            className="xp-icon"
          />
          <span>Ecossistema XP Inc.</span>
        </S.EcosystemButton>
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
}