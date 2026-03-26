import { FieldError, UseFormRegister } from "react-hook-form";
import { UserEditFormData, UserFormFields } from "@schemas/userSchema";

export interface IInput {
  title: string;
  name: keyof UserEditFormData;
  type?: string;
  register: UseFormRegister<UserEditFormData>;
  error?: FieldError;
  defaultValue?: string;
  onReset?: (name: UserFormFields) => void;
  isDirty?: boolean;
}
