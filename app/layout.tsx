import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oliveira & Santos Advocacia | Especialistas em Direito Previdenciário INSS",
  description:
    "Teve seu benefício do INSS negado? Somos especializados em Direito Previdenciário: aposentadoria, auxílio-doença, BPC/LOAS e revisão de benefícios. Análise gratuita do seu caso.",
  keywords:
    "advogado previdenciário, INSS, aposentadoria, benefício negado, auxílio doença, BPC LOAS, direito previdenciário",
  openGraph: {
    title: "Oliveira & Santos Advocacia | Direito Previdenciário",
    description:
      "Teve seu benefício do INSS negado? Fale com especialistas agora. Análise gratuita do seu caso.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
