import Button from '../Button/Button'
import styles from './Intro.module.scss'
import IntroAdvantages from './IntroAdvantages/IntroAdvantage'
import IntroDevices from './IntroDevices/IntroDevices'
import { introContent } from '../../database/content'
import backgroundTop from '../../assets/svg/background-top.svg'

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <img className={styles.intro_background} src={backgroundTop} alt="Background Top" />
            <div className={styles.intro_left}>
              <h1 className={styles.intro_title}>
                { introContent.title }
              </h1>
              <div className={styles.intro_devices}>
                <IntroDevices />
              </div>
              <p className={styles.intro_description}>
                { introContent.description }
              </p>
              <Button name={introContent.button} red={true} />
            </div>
            <div className={styles.intro_advantages}>
              { introContent.advantages.map((advantage) =><IntroAdvantages key={advantage.id} advantage={advantage} />) }
            </div>
          </div>
        </div>
    </section>    
  )
}

export default Intro