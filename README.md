# Xplanner 🚀

<div align="center">

<img src="public/assets/logo-xplanner.png" alt="Xplanner Logo" width="300"/>

### Domine sua grana. Conquiste seus sonhos.
### Um projeto integrado ao Ecosistema XP.

[Ver Demo Online](https://x-planner.vercel.app/login)

</div>

---

## 📦 Instalação e Execução

Para rodar este projeto localmente, é necessário garantir que os **pré-requisitos** abaixo estejam atendidos.

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* **[Node.js](https://nodejs.org/)** (Versão LTS recomendada)
* **[npm](https://www.npmjs.com/)** (Geralmente instalado automaticamente com o Node)

### Como Rodar

1.  **Instale as dependências do projeto:**
    No terminal, dentro da pasta raiz do projeto, execute:
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    Após a instalação, execute o comando:
    ```bash
    npm run dev
    ```

3.  **Acesse a aplicação:**
    Abra o seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver o Xplanner em ação.

---

## 📖 Sobre o Projeto

O **Xplanner** é uma plataforma financeira gamificada desenvolvida com o objetivo de ajudar jovens a cuidar de sua saúde financeira através da educação e de ferramentas práticas.

Nascido durante o **Hackathon XP**, o projeto ataca a dor da falta de educação financeira estruturada para o público jovem. O Xplanner não apenas mostra os números, mas traduz o "financês" e guia o usuário em uma jornada personalizada, conectando objetivos de vida reais aos produtos de investimento da XP Investimentos.

---

## ✨ Funcionalidades Principais

O Xplanner foi construído sobre pilares que transformam a gestão financeira em algo simples e engajador.

### 1. Score de Saúde Financeira 🎯
Muito mais que um score de crédito. Nossa métrica proprietária (0 a 1000) avalia sua saúde financeira real, considerando:
* Nível de endividamento.
* Porcentagem da renda poupada.
* Tamanho da reserva de emergência.
* Diversificação de investimentos.

### 2. Planejador de Metas "Goal-Based" ✈️
Transformamos sonhos em planos acionáveis. O usuário cria metas (ex: "Viagem para o Japão"), e o Xplanner calcula quanto poupar mensalmente, sugerindo as carteiras de investimento ideais da XP para aquele prazo e perfil de risco. Inclui também um **Robô de Rebalanceamento** que sugere ajustes se a meta sair dos trilhos.

### 3. Trilhas de Conhecimento Personalizadas 📚
Chega de conteúdo genérico. Baseado no seu Score Financeiro, a plataforma sugere trilhas educativas exatas para o seu momento. Se o endividamento está alto, a trilha "Saindo das Dívidas" é recomendada.

### 4. Nudges e Gamificação 🎮
Usamos economia comportamental para manter o usuário engajado. Receba "empurrões" (nudges) positivos para manter bons hábitos, participe de desafios como o "QuizBattle" (planejado para a Fase 2) e ganhe recompensas virtuais.

### 5. Analisador de Fluxo de Caixa 💸
* **Acompanhamento Detalhado:** Visualize todas as suas entradas e saídas de dinheiro, com facilidade para categorizar e nomear cada transação.
* **Avaliação de Crédito:** Com base no seu histórico de transações, obtenha uma análise sobre sua aptidão para tomar crédito.
* **Metas Financeiras:** Defina metas e destine parte do seu saldo disponível para alcançá-las.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema React, focando em performance, componentização e experiência do desenvolvedor.

* **[Next.js 14 (App Router)](https://nextjs.org/)**: Framework React principal para rotas, renderização híbrida e otimização.
* **[React](https://reactjs.org/)**: Biblioteca para construção das interfaces de usuário.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript para tipagem estática e código mais seguro.
* **[Styled Components](https://styled-components.com/)**: Para estilização CSS-in-JS, permitindo estilos dinâmicos baseados em props.
* **[Lucide Icons](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
* **[Node.js](https://nodejs.org/)** & **[npm](https://www.npmjs.com/)**: Ambiente de execução e gerenciador de pacotes.

---

## 📂 Estrutura do Projeto

A estrutura de pastas segue o padrão moderno do `App Router` do Next.js, focada em organização e escalabilidade.

```bash
XPLANNER/
├── public/              # Arquivos estáticos (imagens, ícones, assets)
├── src/
│   ├── app/             # Rotas e páginas principais da aplicação (Next.js App Router)
│   │   ├── home/        # Página Principal
│   │   ├── trilhas/     # Área de Educação
│   │   ├── metas/       # Área de Planejamento Financeiro
│   │   └── perfil/      # Configurações do Usuário
│   ├── components/      # Componentes React reutilizáveis (Botões, Cards, Header, Sidebar...)
│   ├── lib/             # Funções utilitárias e configurações (ex: mocks, helpers)
│   └── styles/          # Estilos globais e temas
├── .gitignore
├── package.json         # Dependências e scripts do projeto
├── README.md            # Documentação do projeto
└── tsconfig.json        # Configurações do TypeScript