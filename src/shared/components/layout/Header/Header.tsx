import { logoutAction } from "@/auth/logOut";
import { Logo } from "../../ui";

export default function Header() {
  return (
    <header>
      <Logo />
      <form action={logoutAction}>
        <button>Sair</button>
      </form>
    </header>
  );
}
