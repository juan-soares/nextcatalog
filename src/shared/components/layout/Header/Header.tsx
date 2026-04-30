import { logoutAction } from "@/auth/logOut";

import { Logo } from "../../ui";
import { CategoryNav } from "@/modules/category";

export default function Header() {
  return (
    <header>
      <Logo />
      <form action={logoutAction}>
        <button>Sair</button>
      </form>
      <CategoryNav />
    </header>
  );
}
