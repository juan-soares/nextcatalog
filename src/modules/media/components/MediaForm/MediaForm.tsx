interface Props {
  action: (formData: FormData) => Promise<void>;
}

export default function MediaForm({ action }: Props) {
  return (
    <form action={action}>
      <button type="submit">Enviar</button>
    </form>
  );
}
