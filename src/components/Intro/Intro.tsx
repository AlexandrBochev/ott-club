import Button from '../Button/Button'
import styles from './Intro.module.scss'
import IntroDevices from './IntroDevices/IntroDevices'
import { introContent } from '../../database/content'
import IntroAdvantage from './IntroAdvantage/IntroAdvantage'
import { motion as m } from "framer-motion"

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <img className={styles.intro_background} src={introContent.background} alt="Background Top" />
            <div className={styles.intro_left}>
              <m.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
                // transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                // whileInView={{ opacity: 1, y: 0 }}
                className={styles.intro_title}>
                  { introContent.title }
              </m.h1>
              <div className={styles.intro_devices}><IntroDevices /></div>
              <p className={styles.intro_description}>{ introContent.description }</p>
              <Button name={introContent.button} red={true} />
            </div>
            <div className={styles.intro_advantages}>
              { introContent.advantages.map((advantage) =><IntroAdvantage key={advantage.id} advantage={advantage} />) }
            </div>
          </div>
        </div>
    </section>    
  )
}

export default Intro