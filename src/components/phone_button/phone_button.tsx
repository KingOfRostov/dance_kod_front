import styles from "./phone_button.module.scss";
interface Props {
  phoneNumber: string;
  name: string;
}
export const PhoneButton = (props: Props) => {
  const handlePhoneCall = () => {
    // Создаем ссылку для инициирования звонка
    const phoneLink = `tel:${props.phoneNumber}`;

    // Перенаправляем пользователя на ссылку для звонка
    window.location.href = phoneLink;
  };

  return (
    <button className={styles.call_button} onClick={handlePhoneCall}>
      <p>{props.phoneNumber}</p>
      <p>{props.name}</p>
    </button>
  );
};