import { Logo } from "@/src/_UI/components";
import { Searchbar } from ".";
import { Userbar } from "../../Auth/Userbar";

export function TopHeader() {
  return (
    <div>
      <Logo />
      <Searchbar />
      <Userbar/>
    </div>
  );
}
