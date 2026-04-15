"use server";

import { MediaType } from "@/domains/media-type/entity";
import { createMediaTypeUseCase } from "@/domains/media-type/use-cases";

type CreateMediaTypeActionInput = {
  title: string;
  slug: string;
  description?: string;
  filters?: MediaType["filters"];
  sortOptions?: MediaType["sortOptions"];
};

export async function createMediaTypeAction(input: CreateMediaTypeActionInput) {
  try {
    const result = await createMediaTypeUseCase(input);

    return {
      success: true,
      data: result,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message ?? "Erro inesperado",
    };
  }
}
