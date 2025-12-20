import { CategoryForm } from "@/app/_features/categoryForms/components/CategoryForm";

export default async function CategoryNovoPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categoryTitle = (await params).category;
  return (
    <div>
      <h1>{`Novo Registro em: ${categoryTitle}.`}</h1>
      <CategoryForm category={categoryTitle} />
    </div>
  );
}
