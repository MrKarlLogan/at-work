import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=6",
      );
      return res.json();
    },
  });
};
