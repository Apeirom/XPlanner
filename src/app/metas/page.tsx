// src/app/metas/page.tsx
'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { GoalDetailMain } from '@/components/Goals/GoalDetailMain';
import { LearnMoreAside } from '@/components/Goals/LearnMoreAside';
import { CreateGoalModal } from '@/components/Goals/CreateGoalModal'; 
import { Plus } from 'lucide-react';
import { mockGoals, mockArticlesData } from './mockData';
import * as S from './styles';

export default function MetasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.PageContainer>
      <Sidebar />

      <S.MainContentArea>
        <S.PageHeader>
          <S.HeaderTitlesContainer>
            <S.Title>Suas Metas</S.Title>
            <S.Subtitle>Cada meta tem seu próprio plano de investimento e poupança.</S.Subtitle>
          </S.HeaderTitlesContainer>
          
          <S.NewGoalButton onClick={handleOpenModal}>
            <Plus className="icon-plus" />
            Criar Nova Meta
          </S.NewGoalButton>
        </S.PageHeader>
        
        {mockGoals.map((goal) => (
          <GoalDetailMain 
            key={goal.id}
            data={goal}
          />
        ))}
      </S.MainContentArea>

      <S.RightAsideArea>
        <LearnMoreAside articles={mockArticlesData} />
      </S.RightAsideArea>

      <CreateGoalModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </S.PageContainer>
  );
}