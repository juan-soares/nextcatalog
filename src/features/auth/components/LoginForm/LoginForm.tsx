import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <form>
        <label htmlFor="user">Usuário:</label>
        <input type="email" id="user" name="email" placeholder="Email" />
        <label htmlFor="password">Usuário:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*****"
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}
