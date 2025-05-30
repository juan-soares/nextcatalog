import { IUser } from "../database/database.interface";

export interface ICredentials {
  email: string;
  password: string;
}

export interface IUserInfo extends Omit<IUser, "id" | "email" | "password"> {}
