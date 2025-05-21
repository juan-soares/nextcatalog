import Link from "next/link";

export function UserInfo() {
  return (
    <div>
      <Link href="/profile">
        <img src="avatar" alt="Avatar do usuário." />
        <h2>nickname</h2>
      </Link>
      <button>Sair</button>
    </div>
  );
}
