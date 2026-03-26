import { User } from "./types";

export interface IUserList {
  items: User[];
  onArchive?: (id: number) => void;
  onHide?: (id: number) => void;
  onUnarchive?: (id: number) => void;
  type?: "active" | "archived";
}