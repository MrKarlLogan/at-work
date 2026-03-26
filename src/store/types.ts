import { User } from "@/types/userApi";

export interface UserStore {
  users: User[];
  activeUsers: User[];
  archivedUsers: User[];
  loading: boolean;
  error: string | null;

  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  archiveUser: (userId: number) => void;
  unarchiveUser: (userId: number) => void;
  hideUser: (userId: number) => void;
  editUser: (userId: number, updatedData: Partial<User>) => void;
}
