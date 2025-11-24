'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Adicionei o ícone TrendingUp para o Flow de Grana
import { Home, Map, Target, Trophy, User, TrendingUp } from 'lucide-react';
import * as S from './styles';

// Definindo os itens do menu
const menuItems = [
  { icon: Home, label: 'Home', href: '/home' },
  { icon: TrendingUp, label: 'Flow de Grana', href: '/flow' },
  { icon: Map, label: 'Trilhas', href: '/trilhas' },
  { icon: Target, label: 'Metas', href: '/metas' },
  { icon: Trophy, label: 'Desafios', href: '/desafios' },
  { icon: User, label: 'Perfil', href: '/perfil' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image
          src="/assets/logo-xplanner.png"
          alt="XPlanner Logo"
          width={210}
          height={84}
          priority
        />
      </S.SidebarHeader>

      <S.SidebarNav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Verifica se a rota atual começa com o href do item
          // Adicionei uma verificação extra para a home ('/home') para evitar que ela fique ativa em outras rotas que começam com '/'
          const isActive = item.href === '/home' 
            ? pathname === '/home'
            : pathname?.startsWith(item.href);

          return (
            <Link href={item.href} key={item.href} passHref>
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