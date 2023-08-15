import styles from './IntroDevices.module.scss'
import tv from '../../../assets/png/intro-tv.png'
import shadow from '../../../assets/png/intro-pumpkin_shadow.png'
import pumpkin from '../../../assets/png/intro-pumpkin.png'
import macbook from '../../../assets/png/intro-macbook.png'
import iphone from '../../../assets/png/intro-iphone.png'
import ipad from '../../../assets/png/intro-ipad.png'

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