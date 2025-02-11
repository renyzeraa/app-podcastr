import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"
import '../styles/global.scss'

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
  icons: 'favicon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${interSerif.variable} ${lexendSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
