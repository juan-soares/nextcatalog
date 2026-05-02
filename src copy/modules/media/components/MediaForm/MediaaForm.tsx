"use client";

import { CATEGORY_CONFIG } from "@/config/category";

type Props = {
  action: (formData: FormData) => void;
  media?: any;
};

export function MediaForm({ action, media }: Props) {
  return (
    <form action={action}>
      {/* ID (só para update) */}
      {media?._id && <input type="hidden" name="id" value={media._id} />}

      {/* TÍTULO */}
      <input
        name="title"
        defaultValue={media?.title}
        placeholder="Título"
        required
      />

      {/* CATEGORIA */}
      <select name="category" defaultValue={media?.category} required>
        <option value="">Selecione</option>

        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
          <option key={key} value={key}>
            {config.label}
          </option>
        ))}
      </select>

      {/* COVER */}
      <input
        name="cover"
        defaultValue={media?.cover}
        placeholder="Cover URL"
        required
      />

      <button type="submit">{media ? "Atualizar" : "Criar"}</button>
    </form>
  );
}
