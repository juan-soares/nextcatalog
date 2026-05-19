"use server";

import { createMedia, MediaForm } from "@/modules/media";

export default async function NewMediaPage() {
  return (
    <main>
      <h1>Criar mídia</h1>

      <MediaForm action={createMedia} />
    </main>
  );
}
