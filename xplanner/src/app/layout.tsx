import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

// import { AuthProvider } from '@/hooks/AuthContext';

// Metadados da aplicação (Título da aba e descrição para SEO)
export const metadata: Metadata = {
  title: "XPlanner - Gamificação Financeira",
  description: "Domine suas finanças de forma divertida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Definindo o idioma para português do Brasil
    <html lang="pt-BR">
      <body>
        {/* <AuthProvider>  <- Descomente quando criar o AuthContext */}
          <StyledComponentsRegistry>
            {/* Aqui é onde as páginas (page.tsx) serão renderizadas */}
            {children}
          </StyledComponentsRegistry>
        {/* </AuthProvider> <- Descomente quando criar o AuthContext */}
      </body>
    </html>
  );
}