import { Logo } from "@/app/_UI/components";
import { Searchbar, Userbar } from "./";

export function TopHeader() {
  return (
    <div>
      <Logo />
      <Searchbar />
      <Userbar />
    </div>
  );
}
