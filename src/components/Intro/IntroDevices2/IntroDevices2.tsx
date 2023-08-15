import styles from './IntroDevices2.module.scss'
import tv from '../../../assets/png/intro-tv2.png'
import macbook from '../../../assets/png/intro-macbook2.png'
import iphone from '../../../assets/png/intro-iphone2.png'
import ipad from '../../../assets/png/intro-ipad2.png'

const IntroDevices2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_devices}>
        <img src={tv} alt="tv" className={styles.tv} />
        <img src={macbook} alt="macbook" className={styles.macbook} />
        <img src={iphone} alt="iphone" className={styles.iphone} />
        <img src={ipad} alt="ipad" className={styles.ipad} />
      </div>
    </div>
  )
}

export default IntroDevices2