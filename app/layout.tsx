import type { Metadata } from "next";
import {Nunito} from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "ADL - Comércio de Cereais LTDA",
  description: "ADL - Comércio de Cereais LTDA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${nunito.className}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
