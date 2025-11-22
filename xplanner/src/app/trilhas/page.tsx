'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
// Importamos o Card individual agora, não a Lista
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
      
      <S.ContentArea>
        {selectedTrilhaData ? (
          <TrilhaDetail 
            trilha={selectedTrilhaData} 
            onBack={() => setSelectedTrilhaId(null)} 
          />
        ) : (
          <>
            <S.Header>
              <S.Title>Trilhas de Conhecimento</S.Title>
              <S.Subtitle>Escolha sua jornada de aprendizado e ganhe XP.</S.Subtitle>
            </S.Header>
            
            {/* Container para a lista de cards */}
            <S.CardsListContainer>
              {/* O .map() acontece diretamente aqui na página */}
              {mockTrilhas.map((trilha) => (
                <TrilhaCard 
                  key={trilha.id}
                  data={trilha}
                  onClick={() => setSelectedTrilhaId(trilha.id)}
                />
              ))}
            </S.CardsListContainer>
          </>
        )}
      </S.ContentArea>
    </S.PageContainer>
  );
}