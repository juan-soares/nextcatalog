import "@/app/_UI/styles/variables.css";
import "@/app/_UI/styles/reset.css";
import "@/app/_UI/styles/global.css";

import { inter } from "@/app/_UI/fonts";
import { siteConfig } from "./_lib/config/site";

import { Header } from "./_features/Header";

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
