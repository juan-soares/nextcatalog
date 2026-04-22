import { Logo } from "../../ui";
import { GlobalSearch } from "@/features/global-search";
import { CategoryNav } from "../CategoryNav";

export default function Header() {
  return (
    <header>
      <Logo />
      <GlobalSearch />
      <CategoryNav />
    </header>
  );
}
