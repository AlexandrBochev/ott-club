import styles from './Partners.module.scss'
import samsung from '../../assets/svg/samsung.svg'
import lgSmart from '../../assets/svg/lg-smart.svg'
import ios from '../../assets/svg/ios.svg'
import android from '../../assets/svg/android.svg'

const Partners = () => {
  return (
    <section className='container'>
      <div className={styles.partners}>
        <img src={samsung} alt="samsung" className={styles.partners_1} />
        <img src={ios} alt="ios" className={styles.partners_2} />
        <img src={android} alt="android" className={styles.partners_3} />
        <img src={lgSmart} alt="lgSmart" className={styles.partners_4} />
      </div>
    </section>
  )
}

export default Partners