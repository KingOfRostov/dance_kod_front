import { Header } from '~/components/header/header'
import styles from './layout.module.scss'
import { Footer } from '../footer/footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}
