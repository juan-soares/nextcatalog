import { cookies } from "next/headers";
import { IUserInfo } from "../types";
import { getUserByID } from ".";

export async function getUserSection(): Promise<IUserInfo | null> {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("session")?.value;

  if (!sessionToken) {
    return null;
  }

  const userInfo = await getUserByID(sessionToken);
  return userInfo;
}
