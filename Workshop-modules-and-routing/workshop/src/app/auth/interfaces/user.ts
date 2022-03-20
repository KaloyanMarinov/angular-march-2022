import { IBase } from "src/app/shared/interfaces";

export interface IUser extends IBase {
  themes: string[];
  posts: string[];
  tel: string;
  email: string;
  username: string;
  password: string;
}
