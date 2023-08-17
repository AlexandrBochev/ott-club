import { allDevicesContent } from '../../database/content'
import Button from '../Button/Button'
import styles from './AllDevices.module.scss'
import devicesSm from '../../assets/webp/devices-sm.webp'
import devicesLg from '../../assets/webp/devices-lg.webp'
import devicesMd from '../../assets/webp/devices-md.webp'
import { motion as m } from "framer-motion"

const AllDevices = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <div className={styles.intro_left}>
              <m.h1
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className={styles.intro_title}>
                  { allDevicesContent.title }
              </m.h1>
              <m.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className={styles.intro_description}>
                  { allDevicesContent.description }
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                className={styles.intro_devices}>
                <img src={devicesSm} alt="devicesSm" className={styles.intro_devices_sm} />
                <img src={devicesMd} alt="devicesMd" className={styles.intro_devices_md} />
                <img src={devicesLg} alt="devicesLg" className={styles.intro_devices_lg} />
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              >
                <Button name={allDevicesContent.button} red={true} />
              </m.div>
            </div>
          </div>
        </div>
    </section>    
  )
}

export default AllDevices