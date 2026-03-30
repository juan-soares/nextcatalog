"use server";

export async function filterAction(formData: FormData) {
  const filters = {
    languages: formData.getAll("languages"),
    franchises: formData.getAll("franchises"),
    acquired: formData.getAll("acquired"),
    complete: formData.getAll("complete"),
  };

  console.log(filters);
}
