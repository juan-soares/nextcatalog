import "@/src/_UI/styles/variables.css";
import "@/src/_UI/styles/reset.css";
import "@/src/_UI/styles/global.css";

import { inter } from "@/src/_UI/fonts";
import { siteConfig } from "@/src/_lib/config/const";

import { Header } from "@/src/_features/Header";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
