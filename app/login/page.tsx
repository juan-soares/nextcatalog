export default function Page() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Usuário: </label>
        <input type="email" placeholder="E-mail" required />

        <label>Senha: </label>
        <input type="password" placeholder="****" required />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
