import styles from './IntroDevices.module.scss'
import tv from '../../../assets/svg/intro-tv.svg'
import shadow from '../../../assets/svg/intro-pumpkin_shadow.svg'
import pumpkin from '../../../assets/svg/intro-pumpkin.svg'
import macbook from '../../../assets/svg/intro-macbook.svg'
import iphone from '../../../assets/svg/intro-iphone.svg'
import ipad from '../../../assets/svg/intro-ipad.svg'

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