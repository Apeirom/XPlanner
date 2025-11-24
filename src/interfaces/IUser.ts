// 1. Classe: User
export interface User {
  id: string;
  name: string;
  email: string;
  // Relacionamento: userXP?: UserXP; (Opcional no frontend, carregado sob demanda)
}