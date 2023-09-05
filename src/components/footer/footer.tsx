import Image from 'next/image'
import ImageInst from '/public/inst.png'
import ImageTelegram from '/public/tg.png'
import ImageTwitter from '/public/twitter.png'
import ImageVk from '/public/vk.png'
import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer >
        <div className={styles.socials}>
          <div className={styles.social}>
            <Link
              key="inst_dance_kod"
              href="https://instagram.com/dance_kod_official?igshid=MmIzYWVlNDQ5Yg=="
            >
              <Image
                src={ImageInst}
                alt="Инстаграм instagram Dance KOD"
              />
            </Link>
          </div>
          <div className={styles.social}>
            <Image
              src={ImageVk}
              alt="Вконтакте vk вк Dance KOD"
            />
          </div>
          <div className={styles.social}>
            <Image
              src={ImageTelegram}
              width={32}
              height={32}
              alt="Телеграм Telegram Dance KOD"
            />
          </div>
          <div className={styles.social}>
            <Image
              src={ImageTwitter}
              alt="Твиттер Twitter Dance KOD"
            />
          </div>
        </div>

        <div className={styles.copyright}>
          &copy;Dance KOD, Вдохновляем детей танцевать с 2023 года.
        </div>
      </footer>
    </div>
  )
}

export { Footer }
