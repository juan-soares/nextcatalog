import { Logo } from "../Logo";
import { Navbar, Searchbar, UserInfo } from "./";

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
