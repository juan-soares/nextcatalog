import "@/app/_UI/styles/variables.css";
import "@/app/_UI/styles/reset.css";
import "@/app/_UI/styles/global.css";

import { inter } from "@/app/_UI/fonts";
import { siteConfig } from "@/app/_lib/config/const";
import { Header } from "@/app/_features/header/components";
import { Footer } from "./_features/footer/components";

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
        <Footer />
      </body>
    </html>
  );
}
