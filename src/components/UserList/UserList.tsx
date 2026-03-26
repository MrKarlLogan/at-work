import Card from "../Card/Card";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { IUserList } from "./types";
import styles from "./UserList.module.scss";
import { useUserStore } from "@store/userStore";

const UserList = ({
  items = [],
  onArchive,
  onHide,
  onUnarchive,
  type = "active",
}: IUserList) => {
  const loading = useUserStore((state) => state.loading);

  if (loading) {
    return (
      <ul className={styles.list}>
        {[...Array(6)].map((_, index) => (
          <li key={`skeleton-${index}`}>
            <SkeletonCard />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={styles.list}>
      {items.slice(0, 6).map((card) => (
        <li key={card.id}>
          <Card
            data={card}
            onArchive={onArchive}
            onHide={onHide}
            onUnarchive={onUnarchive}
            type={type}
          />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
