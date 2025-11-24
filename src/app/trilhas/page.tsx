// src/app/trilhas/page.tsx
'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TrilhaCard } from '@/components/Trilhas/TrilhaCard';
import { TrilhaDetail } from '@/components/Trilhas/TrilhaDetail';
import { mockTrilhas } from './mockData';
import * as S from './styles';

export default function TrilhasPage() {
  const [selectedTrilhaId, setSelectedTrilhaId] = useState<number | null>(null);

  const selectedTrilhaData = selectedTrilhaId 
    ? mockTrilhas.find(t => t.id === selectedTrilhaId)
    : null;

  return (
    <S.PageContainer>
      <Sidebar />
      
      {/* ContentArea agora não tem padding */}
      <S.ContentArea>
        
        {selectedTrilhaData ? (
          // --- CENÁRIO 1: DETALHE ABERTO ---
          // O TrilhaDetail é renderizado diretamente no ContentArea sem padding.
          // O header dele vai encostar nas bordas.
          <TrilhaDetail 
            trilha={selectedTrilhaData} 
            onBack={() => setSelectedTrilhaId(null)} 
          />
        ) : (
          // --- CENÁRIO 2: LISTA ABERTA ---
          // Envolvemos o conteúdo da lista no novo wrapper que TEM padding.
          <S.ListContentWrapper>
            <S.Header>
              <S.Title>Trilhas de Conhecimento</S.Title>
              <S.Subtitle>Escolha sua jornada de aprendizado e ganhe XP.</S.Subtitle>
            </S.Header>
            
            <S.CardsListContainer>
              {mockTrilhas.map((trilha) => (
                <TrilhaCard 
                  key={trilha.id}
                  data={trilha}
                  onClick={() => setSelectedTrilhaId(trilha.id)}
                />
              ))}
            </S.CardsListContainer>
          </S.ListContentWrapper>
        )}

      </S.ContentArea>
    </S.PageContainer>
  );
} 