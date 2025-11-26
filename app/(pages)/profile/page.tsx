import { getUserInfo } from "@/src/_features/Auth/Auth.actions";
import { ProfileMain } from "@/src/_features/Profile";
import { redirect } from "next/navigation";

export default async function ProfilePage({ searchParams }: any) {
  const user = await getUserInfo();

  if (!user) {
    redirect("/login");
  }

  const params = (await searchParams) || null;
  const { q } = params;

  return <ProfileMain section={q} />;
}
