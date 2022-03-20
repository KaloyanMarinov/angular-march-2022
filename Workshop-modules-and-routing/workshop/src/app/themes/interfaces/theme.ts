import { IUser } from "src/app/auth/interfaces";
import { IBase } from "src/app/shared/interfaces";

export interface ITheme<T = string> extends IBase {
  subscribers: string[];
  posts: T[];
  themeName: string;
  userId: IUser;
}
