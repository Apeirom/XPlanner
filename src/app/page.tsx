import { redirect } from 'next/navigation';

// Esta é a página inicial (rota /).

export default function HomePage() {
  // Redireciona o usuário para a rota /login.
  redirect('/login');

  // O 'return null' nunca é alcançado devido ao redirect,
  // mas o TypeScript prefere que um componente retorne algo.
  return null;
}