import { ICredentials, IUserOnInfo } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getUserByCredentials({email: emailToSearch, password: passwordToSearch}:ICredentials):Promise<IUserOnInfo | null> {

    const db = await connectToDatabase();

    const user = db["users"].find(({email, password}:ICredentials) => email === emailToSearch && password === passwordToSearch );

    if(!user) return null

    return { nickname: user.nickname, avatar: user.avatar}
}