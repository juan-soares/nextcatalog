import { ProfileSidebar } from "@/src/_features/Profile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProfileSidebar />
      {children}
    </div>
  );
}
