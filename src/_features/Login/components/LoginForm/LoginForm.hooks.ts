import { db } from "@/src/_data/db";
import { IUserInfo } from "./LoginForm.types";
import { IUser } from "@/src/_data/data.types";

export function useAuth() {
  const authUser = async (
    email: string,
    password: string
  ): Promise<IUserInfo | null> => {
    const user: IUser[] = await db.collection("users").find({
      query: {
        fieldsToSearch: ["email", "password"],
        termsToSearch: [email, password],
      },
    });

    const { nickname, avatar } = user[0];

    const userInfo: IUserInfo = {
      nickname,
      avatar,
    };

    return userInfo;
  };

  return { authUser };
}
