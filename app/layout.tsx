import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Thiago de Oliveira Nascimento",
  description:
    "Esse é meu portfólio onde irei falar um pouco sobre mim, minhas stacks skills e postar meus projetos",
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${bebasNeue.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
