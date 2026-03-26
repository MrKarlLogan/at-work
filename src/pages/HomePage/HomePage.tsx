import { useUserStore } from "@store/userStore";
import Section from "@components/Section/Section";
import styles from "./HomePage.module.scss";
import UserList from "@components/UserList/UserList";
import { useShallow } from "zustand/shallow";

const HomePage = () => {
  const { activeUsers, archivedUsers, archiveUser, unarchiveUser, hideUser } =
    useUserStore(
      useShallow((state) => ({
        activeUsers: state.activeUsers,
        archivedUsers: state.archivedUsers,
        archiveUser: state.archiveUser,
        unarchiveUser: state.unarchiveUser,
        hideUser: state.hideUser,
      })),
    );

  return (
    <div className={styles.container}>
      <Section title="Активные">
        <UserList
          items={activeUsers}
          onArchive={archiveUser}
          onHide={hideUser}
          type="active"
        />
      </Section>
      <Section title="Архив">
        <UserList
          items={archivedUsers}
          onUnarchive={unarchiveUser}
          type="archived"
        />
      </Section>
    </div>
  );
};

export default HomePage;
