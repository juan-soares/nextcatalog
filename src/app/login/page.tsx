import styles from "./LoginPage.module.css";
import { LoginForm } from "@/src/components/login";

export default function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <LoginForm />
    </main>
  );
}
