import styles from "./phone_button.module.scss";
interface Props {
  phoneNumber: string;
  name: string;
}
export const PhoneButton = (props: Props) => {


  return (
    <button className={styles.call_button}>
      <p>{props.phoneNumber}</p>
      <p>{props.name}</p>
    </button>


  );
};
