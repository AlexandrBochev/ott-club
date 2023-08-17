import Button from '../Button/Button'
import styles from './Intro.module.scss'
import IntroDevices from './IntroDevices/IntroDevices'
import { introContent } from '../../database/content'
import IntroAdvantage from './IntroAdvantage/IntroAdvantage'
import { motion as m } from "framer-motion"

const Intro = () => {
  let num = 1
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <img className={styles.intro_background} src={introContent.background} alt="Background Top" />
            <div className={styles.intro_left}>
              <m.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                // transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                // whileInView={{ opacity: 1, y: 0 }}
                className={styles.intro_title}>
                  { introContent.title }
              </m.h1>
              <div className={styles.intro_devices}><IntroDevices /></div>
              <m.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                className={styles.intro_description}>
                  { introContent.description }
              </m.p>
              <m.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              >
                <Button name={introContent.button} red={true} />
              </m.div>
            </div>
            <div className={styles.intro_advantages}>
              { introContent.advantages.map((advantage) =>
                <m.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: advantage.id * 0.2, duration: 0.4, ease: "easeOut" }}
                  key={advantage.id}
                >
                  <IntroAdvantage advantage={advantage} />
                </m.div>
              ) }
            </div>
          </div>
        </div>
    </section>    
  )
}

export default Intro