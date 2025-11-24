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
    questionText: 'Qual termo econômico define o aumento generalizado dos preços e a consequente perda do poder de compra da moeda?',
    options: [
      'Deflação',
      'Inflação',
      'Recessão',
      'Superávit'
    ],
    correctAnswerIndex: 1,
    explanation: 'A inflação representa a desvalorização do dinheiro ao longo do tempo, fazendo com que seja necessário mais dinheiro para comprar os mesmos itens.',
    xpPointsReward: 100,
    cashPrize: 1000, // Pergunta de R$ 1 mil
  },
  {
    id: 'q2',
    questionText: 'Ao comprar uma ação na Bolsa de Valores, o investidor se torna:',
    options: [
      'Credor da empresa (a empresa deve dinheiro a ele).',
      'Sócio da empresa (dono de uma pequena parte).',
      'Funcionário da empresa.',
      'Garantidor das dívidas da empresa.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ações representam frações do capital social de uma empresa. Ao comprar uma ação, você se torna coproprietário (sócio) do negócio.',
    xpPointsReward: 200,
    cashPrize: 5000, // Pergunta de R$ 5 mil
  },
  {
    id: 'q3',
    questionText: 'Qual é o limite de garantia do Fundo Garantidor de Créditos (FGC) por CPF e por instituição financeira?',
    options: [
      'R$ 100.000,00',
      'R$ 250.000,00',
      'R$ 500.000,00',
      'R$ 1.000.000,00'
    ],
    correctAnswerIndex: 1,
    explanation: 'O FGC protege investimentos como CDB, LCI e LCA até o limite de R$ 250 mil por CPF em cada conglomerado financeiro, limitado a R$ 1 milhão globalmente a cada 4 anos.',
    xpPointsReward: 400,
    cashPrize: 50000, // Pergunta de R$ 50 mil
  },
  {
    id: 'q4',
    questionText: 'No contexto de política monetária, qual é o efeito esperado quando o Banco Central aumenta a taxa Selic?',
    options: [
      'Aumentar o consumo e aquecer a economia.',
      'Encarecer o crédito, desestimular o consumo e controlar a inflação.',
      'Reduzir os juros da poupança para zero.',
      'Aumentar a cotação do dólar automaticamente.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Juros mais altos tornam o crédito caro e o investimento em renda fixa mais atrativo, retirando dinheiro de circulação e "esfriando" a demanda para baixar a inflação.',
    xpPointsReward: 800,
    cashPrize: 250000, // Pergunta de R$ 250 mil
  },
  {
    id: 'q5',
    questionText: 'No mercado de Derivativos, o que garante ao titular o direito (mas não a obrigação) de comprar um ativo por um preço pré-determinado em uma data futura?',
    options: [
      'Uma Opção de Compra (Call).',
      'Uma Opção de Venda (Put).',
      'Um contrato de Mercado Futuro.',
      'Uma venda a descoberto (Short Selling).'
    ],
    correctAnswerIndex: 0,
    explanation: 'A Call dá ao titular o direito de comprar o ativo ("strike price"). Quem vende a Call assume a obrigação de entregar o ativo se o titular exercer o direito.',
    xpPointsReward: 1500,
    cashPrize: 1000000, // Pergunta do Milhão!
  },
];