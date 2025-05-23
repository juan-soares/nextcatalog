import type { Metadata } from "next";
import "@/app/_UI/styles/global.css";
import "@/app/_UI/styles/reset.css";
import { inter } from "@/app/_UI/fonts";
import { Header } from "@/app/_UI/components/shared";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
