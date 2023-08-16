import { allDevicesContent } from '../../database/content'
import Button from '../Button/Button'
import styles from './AllDevices.module.scss'
import devicesSm from '../../assets/png/devices-sm.png'
import devicesLg from '../../assets/png/devices-lg.png'
import devicesMd from '../../assets/png/devices-md.png'

const AllDevices = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <div className={styles.intro_left}>
              <h1 className={styles.intro_title}>{ allDevicesContent.title }</h1>
              <p className={styles.intro_description}>{ allDevicesContent.description }</p>
              <div className={styles.intro_devices}>
                <img src={devicesSm} alt="devicesSm" className={styles.intro_devices_sm} />
                <img src={devicesMd} alt="devicesMd" className={styles.intro_devices_md} />
                <img src={devicesLg} alt="devicesLg" className={styles.intro_devices_lg} />
              </div>
              <Button name={allDevicesContent.button} red={true} />
            </div>
          </div>
        </div>
    </section>    
  )
}

export default AllDevices