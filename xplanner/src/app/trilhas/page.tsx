'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TrilhaList } from '@/components/Trilhas/TrilhaList';
import { TrilhaDetail } from '@/components/Trilhas/TrilhaDetail';
import { mockTrilhas } from './mockData';
import * as S from './styles';

export default function TrilhasPage() {
  // Estado para controlar se uma trilha está selecionada (null = mostrando a lista)
  const [selectedTrilhaId, setSelectedTrilhaId] = useState<number | null>(null);

  // Encontra a trilha selecionada com base no ID
  const selectedTrilhaData = selectedTrilhaId 
    ? mockTrilhas.find(t => t.id === selectedTrilhaId)
    : null;

  return (
    <S.PageContainer>
      <Sidebar />
      
      <S.ContentArea>
        {selectedTrilhaData ? (
          // Se tem trilha selecionada, mostra o detalhe
          <TrilhaDetail 
            trilha={selectedTrilhaData} 
            onBack={() => setSelectedTrilhaId(null)} 
          />
        ) : (
          // Se não, mostra a lista
          <>
            <S.Header>
              <S.Title>Trilhas de Conhecimento</S.Title>
              <S.Subtitle>Escolha sua jornada de aprendizado e ganhe XP.</S.Subtitle>
            </S.Header>
            
            <TrilhaList 
              trilhas={mockTrilhas} 
              onSelectTrilha={setSelectedTrilhaId} 
            />
          </>
        )}
      </S.ContentArea>
    </S.PageContainer>
  );
}