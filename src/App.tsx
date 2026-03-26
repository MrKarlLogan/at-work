import { RouterProvider } from "react-router-dom";
import { router } from "@router/index";
import { useUserStore } from "@store/userStore";
import { useEffect } from "react";
import { useUsers } from "@hooks/useUsers";
import { useShallow } from "zustand/shallow";

function App() {
  const { setUsers, setLoading, setError } = useUserStore(
    useShallow((state) => ({
      setUsers: state.setUsers,
      setLoading: state.setLoading,
      setError: state.setError,
    })),
  );
  const { data: users, isLoading, error } = useUsers();

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    setError(error ? error.message : null);
  }, [error, setError]);

  useEffect(() => {
    if (users) setUsers(users);
  }, [users, setUsers]);

  return <RouterProvider router={router} />;
}

export default App;
