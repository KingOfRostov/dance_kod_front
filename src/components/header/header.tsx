import Image from 'next/image'
import LogoEmpty from '/public/logo-empty.png'
import styles from './header.module.scss'

export const Header = () => (
  <div className={styles.header_block}>
    <div className='container'>

      <Image
        className={styles.logo}
        src={LogoEmpty}
        alt="Dance KOD. Школа танцев КОД. Ростов-на-Дону школа танцев для детей."
      />
      <h1 className={styles.title}>
        Dance <span className="pink"> KOD </span>
      </h1>
      <h2 className={styles.subTitle}>
        <span className="pink">К</span>омьюнити <span className="pink">О</span>
        даренных <span className="pink">Д</span>етей
      </h2>
      <h2 className={styles.subTitle}>Школа танцев</h2>

    </div>
  </div >
)
