import { cookies } from "next/headers";
import { IUserInfo } from "../types";

async function getUserInfo(): Promise<IUserInfo | null> {
  return null;
}

export async function getUserSection(): Promise<IUserInfo | null> {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session")?.value;

  if (!sessionToken) {
    return null;
  }

  const userInfo = await getUserInfo();

  return userInfo;
}
