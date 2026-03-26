import { create } from "zustand";
import { UserStore } from "./types";

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  activeUsers: [],
  archivedUsers: [],
  loading: false,
  error: null,

  setUsers: (users) => {
    set({
      users,
      activeUsers: users,
      archivedUsers: [],
    });
  },

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  archiveUser: (userId) => {
    const { activeUsers, archivedUsers } = get();
    const userToArchive = activeUsers.find((user) => user.id === userId);

    if (userToArchive) {
      set({
        activeUsers: activeUsers.filter((user) => user.id !== userId),
        archivedUsers: [...archivedUsers, userToArchive],
      });
    }
  },

  unarchiveUser: (userId) => {
    const { archivedUsers, activeUsers } = get();
    const userToUnarchive = archivedUsers.find((user) => user.id === userId);

    if (userToUnarchive) {
      set({
        archivedUsers: archivedUsers.filter((user) => user.id !== userId),
        activeUsers: [...activeUsers, userToUnarchive],
      });
    }
  },

  hideUser: (userId) => {
    const { activeUsers } = get();
    set({
      activeUsers: activeUsers.filter((user) => user.id !== userId),
    });
  },

  editUser: (userId, updatedData) => {
    const { users, activeUsers, archivedUsers } = get();

    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...updatedData } : user,
    );

    const updatedActiveUsers = activeUsers.map((user) =>
      user.id === userId ? { ...user, ...updatedData } : user,
    );

    const updatedArchivedUsers = archivedUsers.map((user) =>
      user.id === userId ? { ...user, ...updatedData } : user,
    );

    set({
      users: updatedUsers,
      activeUsers: updatedActiveUsers,
      archivedUsers: updatedArchivedUsers,
    });
  },
}));
