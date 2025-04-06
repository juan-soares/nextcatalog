import Link from "next/link";

export function UserInfo() {
  const user = null;

  if (!user)
    return (
      <div>
        <Link href="login">Entrar</Link>
      </div>
    );

  return (
    <div>
      <img src="/1" alt="Avatar do usuário." width={60} height={60} />
      <h1>Nickname</h1>
      <button>Sair</button>
    </div>
  );
}
