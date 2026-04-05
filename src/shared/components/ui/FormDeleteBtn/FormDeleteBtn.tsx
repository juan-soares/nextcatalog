"use client";

export default function FormDeleteBtn() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!confirm("Tem certeza que deseja deletar este registro?")) {
      e.preventDefault();
    }
  };
  return <button onClick={handleClick}>Remover</button>;
}
