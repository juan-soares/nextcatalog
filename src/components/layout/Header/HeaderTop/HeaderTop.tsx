import styles from "./HeaderTop.module.css";
import { Logo } from "@/components/ui/Logo";
import { HeaderSearch, HeaderUserInfo } from "./";

export function HeaderTop() {
  return (
    <div>
      <Logo />
      <HeaderSearch />
      <HeaderUserInfo />
    </div>
  );
}
