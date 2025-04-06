import { Logo } from "@/app/_ui/components";
import { Navbar, Searchbar, UserInfo } from "./components";

export function Header() {
  return (
    <header>
      <Logo />
      <Searchbar />
      <UserInfo />
      <Navbar />
    </header>
  );
}
