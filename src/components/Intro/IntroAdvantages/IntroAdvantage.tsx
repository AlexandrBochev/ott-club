import styles from './IntroAdvantage.module.scss'

interface IAdvantage {
  id: number
  title: string
  description: string
  icon: string
}

const IntroAdvantage = ({ advantage }: { advantage: IAdvantage }) => {
  return (
    <div className={styles.advantage}>
      <img className={styles.advantage_icon} src={advantage.icon} alt="Pic" />
      <h3 className={styles.advantage_title}>{advantage.title}</h3>
      <p className={styles.advantage_description}>{advantage.description}</p>
    </div>
  )
}

export default IntroAdvantage