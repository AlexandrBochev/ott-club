import styles from './Partners.module.scss'
import samsung from '../../assets/svg/samsung.svg'
import lgSmart from '../../assets/svg/lg-smart.svg'
import ios from '../../assets/svg/ios.svg'
import android from '../../assets/svg/android.svg'
import { motion as m } from "framer-motion"

const Partners = () => {
  return (
    <section className='container'>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
        className={styles.partners}>
        <a href="https://www.samsung.com/ua/tvs/smart-tv/" target='_blank'>
          <img src={samsung} alt="samsung" className={styles.partners_1} />
        </a>
        <a href="https://www.apple.com/ua/apple-tv-plus/" target='_blank'>
          <img src={ios} alt="ios" className={styles.partners_2} />
        </a>
        <a href="https://www.android.com/intl/ru_ru/tv/" target='_blank'>
          <img src={android} alt="android" className={styles.partners_3} />
        </a>
        <a href="https://www.lg.com/ru/lg-magazine/what-is/kak-nastroit-smart-tv-na-televisore" target='_blank'>
          <img src={lgSmart} alt="lgSmart" className={styles.partners_4} />
        </a>
      </m.div>
    </section>
  )
}

export default Partners