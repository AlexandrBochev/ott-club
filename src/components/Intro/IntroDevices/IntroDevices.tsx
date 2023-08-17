import styles from './IntroDevices.module.scss'
import tv from '../../../assets/webp/intro-tv.webp'
import shadow from '../../../assets/webp/intro-pumpkin_shadow.webp'
import pumpkin from '../../../assets/webp/intro-pumpkin.webp'
import macbook from '../../../assets/webp/intro-macbook.webp'
import iphone from '../../../assets/webp/intro-iphone.webp'
import ipad from '../../../assets/webp/intro-ipad.webp'
import { motion as m } from "framer-motion"

const IntroDevices = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_devices}>
        <m.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          src={tv} alt="tv" className={styles.tv} />

        <m.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: "easeIn" }}
          src={shadow} alt="shadow" className={styles.shadow} />

        <m.img
          initial={{ opacity: 0, y: -400 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.4, ease: "easeIn" }}
          src={pumpkin} alt="pumpkin" className={styles.pumpkin} />

        <m.img
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
          src={macbook} alt="macbook" className={styles.macbook} />

        <m.img
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          src={iphone} alt="iphone" className={styles.iphone} />

        <m.img
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
          src={ipad} alt="ipad" className={styles.ipad} />
      </div>
    </div>
  )
}

export default IntroDevices