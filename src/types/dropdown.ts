export interface DropDownProps {
  type: "one" | "two";
  onAction: (action: string) => void;
}