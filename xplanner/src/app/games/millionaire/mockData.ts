// src/app/games/millionaire/mockData.ts

// Definindo a interface baseada na sua estrutura
export interface QuizContent {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
  xpPointsReward: number; // Pontos XP que ganha
  cashPrize: number; // Valor acumulado em R$ (para o visual do jogo)
}

// Lista de perguntas, da mais fácil para a mais difícil
export const millionaireQuestions: QuizContent[] = [
  {
    id: 'q1',
    questionText: 'Qual é a principal função de uma Reserva de Emergência?',
    options: [
      'Comprar itens de luxo em promoções.',
      'Cobrir despesas imprevistas e urgentes.',
      'Investir em ações de alto risco.',
      'Pagar a fatura do cartão de crédito todo mês.'
    ],
    correctAnswerIndex: 1, // "Cobrir despesas imprevistas..."
    explanation: 'A reserva de emergência serve como um colchão financeiro para imprevistos como perda de emprego ou despesas médicas.',
    xpPointsReward: 100,
    cashPrize: 1000, // Pergunta de R$ 1 mil
  },
  {
    id: 'q2',
    questionText: 'O que significa a sigla CDI no mundo dos investimentos?',
    options: [
      'Certificado de Depósito Interbancário',
      'Comissão de Dívida Interna',
      'Crédito Direto ao Investidor',
      'Custo de Dinheiro Indexado'
    ],
    correctAnswerIndex: 0,
    explanation: 'CDI é a taxa que os bancos cobram para emprestar dinheiro uns aos outros por um dia. É a principal referência para a Renda Fixa.',
    xpPointsReward: 200,
    cashPrize: 5000, // Pergunta de R$ 5 mil
  },
  {
    id: 'q3',
    questionText: 'Qual destes investimentos é considerado o mais seguro do Brasil?',
    options: [
      'Ações da Petrobras',
      'Fundos Imobiliários (FIIs)',
      'Tesouro Selic',
      'Bitcoin'
    ],
    correctAnswerIndex: 2,
    explanation: 'O Tesouro Selic é garantido pelo Tesouro Nacional, sendo considerado o investimento de menor risco de crédito do país.',
    xpPointsReward: 400,
    cashPrize: 50000, // Pergunta de R$ 50 mil
  },
  {
    id: 'q4',
    questionText: 'O que é "Juros Compostos"?',
    options: [
      'Juros cobrados apenas sobre o valor inicial emprestado.',
      'Uma taxa extra cobrada por bancos em empréstimos.',
      'Juros que incidem sobre o capital inicial mais os juros acumulados (juros sobre juros).',
      'Um tipo de imposto sobre investimentos.'
    ],
    correctAnswerIndex: 2,
    explanation: 'É o efeito "bola de neve" onde seus rendimentos também passam a render, acelerando o crescimento do patrimônio a longo prazo.',
    xpPointsReward: 800,
    cashPrize: 250000, // Pergunta de R$ 250 mil
  },
  {
    id: 'q5',
    questionText: 'Para um objetivo de longo prazo (ex: aposentadoria em 30 anos), qual estratégia geralmente é mais indicada?',
    options: [
      'Deixar todo o dinheiro na poupança para não correr riscos.',
      'Investir 100% em criptomoedas para tentar ficar rico rápido.',
      'Diversificar a carteira com uma maior exposição a Renda Variável (Ações, FIIs) para buscar maior rentabilidade.',
      'Usar apenas títulos de Renda Fixa com liquidez diária.'
    ],
    correctAnswerIndex: 2,
    explanation: 'No longo prazo, a volatilidade da renda variável tende a ser compensada por retornos maiores, sendo essencial diversificar.',
    xpPointsReward: 1500,
    cashPrize: 1000000, // Pergunta do Milhão!
  },
];