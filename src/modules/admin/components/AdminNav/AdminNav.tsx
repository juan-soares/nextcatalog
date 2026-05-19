import Link from "next/link";
import { adminMenu } from "../../const";

export default function AdminNav() {
  return (
    <aside>
      <nav>
        <ul>
          {adminMenu.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
