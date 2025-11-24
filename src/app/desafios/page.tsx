'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Star } from 'lucide-react';
// Importando os novos componentes
import { HeaderSection } from '@/components/Desafios/HeaderSection';
import { ChallengeCard } from '@/components/Desafios/ChallengeCard';
// Dados mockados adaptados
import { dailyChallengesMock, weeklyChallengesMock } from './mockData';
import * as S from './styles';

export default function DesafiosPage() {
  const [activeTab, setActiveTab] = useState<'DAILY' | 'WEEKLY'>('DAILY');

  // Seleciona os dados com base na aba ativa
  const challengesData = activeTab === 'DAILY' ? dailyChallengesMock : weeklyChallengesMock;

  // Função placeholder para a ação de reivindicar (será conectada ao backend)
  const handleClaimReward = (challengeId: string) => {
    console.log(`Reivindicando recompensa para o desafio: ${challengeId}`);
    // Aqui você faria a requisição para a API para marcar como reivindicado e dar as recompensas
  };

  return (
    <S.PageContainer>
      <Sidebar />

      <S.ContentArea>
        {/* Componente do Cabeçalho */}
        <HeaderSection 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {/* Lista de Cards */}
        <S.ChallengesList>
          {challengesData.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              data={challenge}
              onClaim={handleClaimReward}
            />
          ))}
        </S.ChallengesList>

        {/* Footer informativo */}
        <S.FooterInfo>
          <p>
            <Star size={16} fill="currentColor" />
            Novos desafios {activeTab === 'DAILY' ? 'amanhã' : 'na próxima semana'}!
          </p>
        </S.FooterInfo>
      </S.ContentArea>
    </S.PageContainer>
  );
}