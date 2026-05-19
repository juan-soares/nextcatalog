import { AdminNav } from "@/modules/admin";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
}
