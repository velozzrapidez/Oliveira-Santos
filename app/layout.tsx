import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advogado Previdenciário em Itumbiara | Oliveira & Santos Advocacia INSS",
  description:
    "Procurando advogado especialista em INSS em Itumbiara e região? Teve seu benefício negado? Resolvemos casos de Aposentadoria, BPC/LOAS e Auxílio-Doença. Atendimento presencial e online.",
  keywords:
    "advogado previdenciário Itumbiara, advogado INSS Itumbiara, escritório de advocacia Itumbiara, aposentadoria Itumbiara, benefício negado INSS, auxílio doença Itumbiara GO, BPC LOAS",
  openGraph: {
    title: "Advogado Especialista em INSS em Itumbiara - Oliveira & Santos",
    description:
      "Aposentadoria, revisões e benefícios negados pelo INSS. Fale com nossos advogados em Itumbiara e tenha uma análise gratuita do seu caso.",
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
