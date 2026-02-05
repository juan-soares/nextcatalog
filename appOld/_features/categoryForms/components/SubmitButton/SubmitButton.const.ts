export const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  const confirm = window.confirm("Deseja confinuar?");

  if (!confirm) {
    event.preventDefault();
  }
};
