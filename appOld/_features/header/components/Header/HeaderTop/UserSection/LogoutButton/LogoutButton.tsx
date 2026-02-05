import styles from "./LogoutButton.module.css";
import { logout } from "@/app/_features/auth/actions";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button className={styles.logoutButton}>Sair</button>
    </form>
  );
}
