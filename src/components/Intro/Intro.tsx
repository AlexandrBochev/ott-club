import Button from '../Button/Button'
import styles from './Intro.module.scss'
import IntroAdvantages from './IntroAdvantages/IntroAdvantage'
// import IntroDevices from './IntroDevices/IntroDevices'

interface IIntro {
  title: string;
  description: string;
  button: string;
  background?: string
  advantages?: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
}

interface IntroProps {
  introContent: IIntro
  introDevices: React.ComponentType
}

const Intro: React.FC<IntroProps> = ({ introContent, introDevices: IntroDevices }) => {
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
              { introContent.advantages && introContent.advantages.map((advantage) =><IntroAdvantages key={advantage.id} advantage={advantage} />) }
            </div>
          </div>
        </div>
    </section>    
  )
}

export default Intro