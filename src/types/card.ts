import { User } from "./user";

export interface CardProps {
  data: User;
  onArchive?: (id: number) => void;
  onHide?: (id: number) => void;
  onUnarchive?: (id: number) => void;
  type?: "active" | "archived";
}
