import { Logo } from "../../ui";
import { UserSession } from "@/features/auth";
import { CategoryNav } from "@/modules/category";

export default function Header() {
  return (
    <header>
      <Logo />
      <UserSession />
      <CategoryNav />
    </header>
  );
}
