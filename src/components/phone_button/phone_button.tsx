import styles from './phone_button.module.scss'

interface Props {
  phoneNumber: string
  name: string
}

export const PhoneButton = ({ phoneNumber, name }: Props) => {
  const handlePhoneCall = () => {
    const phoneLink = `tel:${phoneNumber}`
    window.location.href = phoneLink
  }

  return (
    <button className={styles.call_button} onClick={handlePhoneCall}>
      <p>{phoneNumber}</p>
      <p>{name}</p>
    </button>
  )
}
