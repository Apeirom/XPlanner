// src/components/Goals/LearnMoreAside/index.tsx
'use client';

import { ExternalLink } from 'lucide-react';
// Importando o tipo dos dados
import { ArticleType } from '@/app/metas/mockData';
import * as S from './styles';

// Definindo a interface das Props
interface LearnMoreAsideProps {
  articles: ArticleType[];
}

// O componente recebe a lista de artigos como prop
export function LearnMoreAside({ articles }: LearnMoreAsideProps) {
  // Removemos a definição interna dos artigos

  return (
    <S.Container>
      {/* Título traduzido */}
      <S.Title>Aprenda Mais</S.Title>
      
      <S.ArticlesList>
        {/* Usamos a prop 'articles' para o map */}
        {articles.map(article => (
          <S.ArticleCard key={article.id}>
            <S.CardHeader>
              <S.CardTag $color={article.tagColor}>{article.tag}</S.CardTag>
            </S.CardHeader>
            
            <S.CardTitle>{article.title}</S.CardTitle>
            <S.CardDescription>{article.description}</S.CardDescription>
            
            <S.CardFooter>
              <S.ReadTime>{article.readTime}</S.ReadTime>
              <ExternalLink className="link-icon" />
            </S.CardFooter>
          </S.ArticleCard>
        ))}
      </S.ArticlesList>
    </S.Container>
  );
}