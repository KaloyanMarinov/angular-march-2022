import { IUser } from "src/app/auth/interfaces";
import { IBase } from "src/app/shared/interfaces";
import { ITheme } from ".";

export interface IPost extends IBase {
  likes: string[];
  text: string;
  userId: IUser;
  themeId: ITheme;
}
