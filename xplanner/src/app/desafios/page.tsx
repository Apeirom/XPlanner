// File: src/app/desafios/page.tsx
// Página de Desafios seguindo o padrão das demais páginas
// Renderiza os desafios Diários ou Semanais conforme a aba selecionada.

"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Flame, Trophy, Star } from "lucide-react";
import { ChallengeCard } from "@/components/Desafios/ChallengeCard";
import { dailyChallenges, weeklyChallenges } from "./mockData";
import * as S from "./styles";

export default function DesafiosPage() {
  const [tab, setTab] = useState<"DAILY" | "WEEKLY">("DAILY");

  const data = tab === "DAILY" ? dailyChallenges : weeklyChallenges;

  return (
    <S.PageContainer>
      <Sidebar />

      <S.Content>
        <S.Header>
          <S.Title>
            Desafios
            <p>Complete e ganhe recompensas!</p>
          </S.Title>


          <S.TabsContainer>
            <S.TabButton
              $active={tab === "DAILY"}
              onClick={() => setTab("DAILY")}
            >
              <Flame size={18} />
              Diários
            </S.TabButton>

            <S.TabButton
              $active={tab === "WEEKLY"}
              onClick={() => setTab("WEEKLY")}
            >
              <Trophy size={18} />
              Semanais
            </S.TabButton>
          </S.TabsContainer>
        </S.Header>

        <S.List>
          {data.map((challenge) => (
            <ChallengeCard key={challenge.id} data={challenge} />
          ))}
        </S.List>

        <S.Footer>
          <Star size={18} />
          <span>
            {tab === "DAILY"
              ? "Novos desafios amanhã!"
              : "Novos desafios na próxima semana!"}
          </span>
        </S.Footer>
      </S.Content>
    </S.PageContainer>
  );
}
