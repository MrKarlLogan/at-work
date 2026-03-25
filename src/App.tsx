import Header from "@components/Header/Header";
import Main from "@components/Main/Main";
import Section from "./components/Section/Section";
import { useEffect, useState } from "react";
import { User } from "./types/user";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error(`Ошибка запроса! Статус: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        throw new Error("Произошла ошибка при загрузке пользователей:" + error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Section title="Активные" items={users} />
        <Section title="Архив" />
      </Main>
    </>
  );
};

export default App;
