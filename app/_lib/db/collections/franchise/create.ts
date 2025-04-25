"use server";

import { slugfy } from "@/app/_lib/utils";

export async function createFranchise(formFields: FormData) {
  const newFranchise = {
    title: formFields.get("title")?.toString() || "",
    slug: slugfy(formFields.get("title")?.toString() || ""),
    logo: "",
  };

  console.log(newFranchise);
}
