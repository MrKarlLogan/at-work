import { useQuery } from "@tanstack/react-query";

const limitUsers = 6;

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=${limitUsers}`,
      );
      return res.json();
    },
  });
