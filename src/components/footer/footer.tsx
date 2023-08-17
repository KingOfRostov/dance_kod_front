import Image from 'next/image'
import ImageInst from '/public/inst.png'
import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <hr />
      <h3 className={styles.title}>
        <span className='red'>Мы</span> в соцсетях
      </h3>
      <div className={styles.social}>
        <Link
          key="inst_dance_kod"
          href="https://instagram.com/dance_kod_official?igshid=MmIzYWVlNDQ5Yg=="
        >
          <Image
            src={ImageInst}
            width={50}
            height={50}
            alt="Инстаграм instagram Dance KOD"
          />
        </Link>
        <h3 className={styles.title}>
          <span className={styles.hashtag}>@dance_kod_official</span>
        </h3>
        ‌
      </div>
      <hr />
      Created by &copy;KingOfRostov &copy;mamorde
    </footer>
  )
}

export { Footer }
