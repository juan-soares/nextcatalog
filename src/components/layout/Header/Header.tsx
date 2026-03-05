import styles from "./Header.module.css";
import { Suspense } from "react";
import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/features/globalSearch/components";
import { UserInfo } from "@/features/auth/components";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <Suspense fallback={<div>Carregando...</div>}>
          <GlobalSearch />
        </Suspense>
        <UserInfo />
      </div>
      <Navbar />
    </header>
  );
}
