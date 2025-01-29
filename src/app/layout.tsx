import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { Header } from "@/components/header"

const interSerif = Inter({
  variable: "--font-inter-serif",
  subsets: ["latin"],
})

const lexendSerif = Lexend({
  variable: "--font-inter-serif",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Início | Podcastr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interSerif.variable} ${lexendSerif.variable} ${styles.wrapper}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
