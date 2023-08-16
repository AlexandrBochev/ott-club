import Button from '../Button/Button'
import styles from './Intro.module.scss'
import IntroDevices from './IntroDevices/IntroDevices'
import { introContent } from '../../database/content'
import IntroAdvantage from './IntroAdvantage/IntroAdvantage'


// interface IIntro {
//   title: string;
//   description: string;
//   button: string;
//   background?: string
//   advantages?: {
//     id: number;
//     title: string;
//     description: string;
//     icon: string;
//   }[];
// }

const Intro = () => {
  return (
    <section className={styles.wrapper}>
      <div className='container'>
          <div className={styles.intro}>
            <img className={styles.intro_background} src={introContent.background} alt="Background Top" />
            <div className={styles.intro_left}>
              <h1 className={styles.intro_title}>{ introContent.title }</h1>
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