import { User } from "./user";

export interface IUserList {
  items: User[];
  onArchive?: (id: number) => void;
  onHide?: (id: number) => void;
  onUnarchive?: (id: number) => void;
  type?: "active" | "archived";
}