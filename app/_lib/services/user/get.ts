import database from "../../database";
import { ICredentials, IUserInfo } from "../../interfaces";

export async function getUserByCredentials(
  credentials: ICredentials
): Promise<IUserInfo | null> {
  try {
    const userInfo: IUserInfo | undefined = (
      await database.getCollectionRecords("users", "alph")
    ).find(
      ({ email, password }) =>
        email === credentials.email && password === credentials.password
    );

    if (!userInfo) throw new Error("Usuário ou senha incorretos.");

    return userInfo;
  } catch (error) {
    console.error("Ops! Algo deu errado" + error);
    return null;
  }
}
