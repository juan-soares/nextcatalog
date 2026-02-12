import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <div className={styles.loginFormWrapper}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form}>
        <label className={styles.label}>
          Usuário
          <input type="email" className={styles.input} required />
        </label>

        <label className={styles.label}>
          Senha
          <input type="password" className={styles.input} required />
        </label>

        <button type="submit" className={styles.loginButton}>
          Entrar
        </button>
      </form>
    </div>
  );
}
