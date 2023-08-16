import styles from './IntroDevices.module.scss'
import tv from '../../../assets/webp/intro-tv.webp'
import shadow from '../../../assets/webp/intro-pumpkin_shadow.webp'
import pumpkin from '../../../assets/webp/intro-pumpkin.webp'
import macbook from '../../../assets/webp/intro-macbook.webp'
import iphone from '../../../assets/webp/intro-iphone.webp'
import ipad from '../../../assets/webp/intro-ipad.webp'

const IntroDevices = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_devices}>
        <img src={tv} alt="tv" className={styles.tv} />
        <img src={shadow} alt="shadow" className={styles.shadow} />
        <img src={pumpkin} alt="pumpkin" className={styles.pumpkin} />
        <img src={macbook} alt="macbook" className={styles.macbook} />
        <img src={iphone} alt="iphone" className={styles.iphone} />
        <img src={ipad} alt="ipad" className={styles.ipad} />
      </div>
    </div>
  )
}

export default IntroDevices