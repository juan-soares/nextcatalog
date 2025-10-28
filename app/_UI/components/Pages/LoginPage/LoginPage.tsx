import Link from "next/link";
import styles from "./LoginPage.module.css";

export function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Usuário:</label>
        <input type="email" id="email" placeholder="user@user.com" required />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="*****" required />

        <button>Enviar</button>
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </form>
    </main>
  );
}
