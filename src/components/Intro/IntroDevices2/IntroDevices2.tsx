import styles from './IntroDevices2.module.scss'
import devicesSm from '../../../assets/png/devices-sm.png'
import devicesMd from '../../../assets/png/devices-md.png'
import devicesLg from '../../../assets/png/devices-lg.png'

const IntroDevices2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.intro_devices}>
        <img src={devicesSm} alt="devicesSm" className={styles.intro_devices_sm} />
        <img src={devicesMd} alt="devicesMd" className={styles.intro_devices_md} />
        <img src={devicesLg} alt="devicesLg" className={styles.intro_devices_lg} />
      </div>
    </div>
  )
}

export default IntroDevices2