import { attributeServices } from "@/domains/attribute";
import { AttributesNav } from "@/features/attribute";

export default async function AttributesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const attributeLinks = await attributeServices.listAttributeLinks();

  return (
    <div>
      <aside>
        <AttributesNav attributeLinks={attributeLinks} />
      </aside>

      <main>{children}</main>
    </div>
  );
}
