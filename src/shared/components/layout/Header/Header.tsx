import { Logo } from "../../ui";
import { GlobalSearch } from "@/features/global-search";
import { MediaTypeNav } from "@/features/navigation";

export default function Header() {
  return (
    <header>
      <Logo />
      <GlobalSearch />
      <MediaTypeNav />
    </header>
  );
}
