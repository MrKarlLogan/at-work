import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditUserPage.module.scss";
import { useUserStore } from "@/store/userStore";
import defaultImg from "@assets/defaultImg.webp";
import Section from "@/components/Section/Section";
import ButtonSVG from "./ButtonSvg/ButtonSvg";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { UserEditFormData, userEditSchema } from "@/schemas/userSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import SkeletonEditPage from "@/components/SkeletonEditPage/SkeletonEditPage";
import Popup from "@/components/Popup/Popup";

const EditUserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { users, editUser, loading } = useUserStore();
  const [showPopup, setShowPopup] = useState(false);

  const user = users.find((user) => user.id === Number(userId));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserEditFormData>({
    resolver: zodResolver(userEditSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        phone: user.phone,
        companyName: user.company.name,
      });
    }
  }, [user, reset]);

  const onSubmit = (data: UserEditFormData) => {
    if (!user) return;

    editUser(user.id, {
      name: data.name,
      username: data.username,
      email: data.email,
      address: { ...user.address, city: data.city },
      phone: data.phone,
      company: { ...user.company, name: data.companyName },
    });

    setShowPopup(true);
  };

  if (loading) {
    return <SkeletonEditPage />;
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn_back} onClick={() => navigate("/")}>
        <ButtonSVG />
        Назад
      </button>
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <img
            src={defaultImg}
            alt="Аватар пользователя"
            className={styles.avatar}
          />
          <div className={styles.profile_data}>
            <h3 className={styles.title}>Данные профиля</h3>
            <span className={styles.others}>Рабочее пространство</span>
            <span className={styles.others}>Приватность</span>
            <span className={styles.others}>Безопасность</span>
          </div>
        </div>
        <div className={styles.descriptionBox}>
          <Section title="Данные профиля">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.description}
            >
              <div className={styles.input_section}>
                <Input
                  title="Имя"
                  name="name"
                  register={register}
                  error={errors.name}
                />
                <Input
                  title="Никнейм"
                  name="username"
                  register={register}
                  error={errors.username}
                />
                <Input
                  title="Почта"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                />
                <Input
                  title="Город"
                  name="city"
                  register={register}
                  error={errors.city}
                />
                <Input
                  title="Телефон"
                  name="phone"
                  register={register}
                  error={errors.phone}
                />
                <Input
                  title="Название компании"
                  name="companyName"
                  register={register}
                  error={errors.companyName}
                />
              </div>
              <Button
                title="Сохранить"
                type="submit"
              />
            </form>
          </Section>
        </div>
      </div>
      {showPopup && (
        <Popup
          title="Изменения сохранены!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default EditUserPage;
