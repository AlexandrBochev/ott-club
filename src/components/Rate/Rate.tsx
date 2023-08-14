import styles from './Rate.module.scss'
import eye from '../../assets/svg/eye.svg'
import check from '../../assets/svg/check.svg'
import { rateContent } from '../../database/content';
import { introContent } from '../../database/content';

const Rate = () => {
  return (
    <section className='container'>
      <div className={styles.rate}>
        <img src={eye} alt="eye" width={64} height={68} className={styles.rate_eye} />
        <div className={styles.rate_block}>
          <div className={styles.rate_title}>
            <p className={styles.rate_price}>{rateContent.price}<span> / месяц</span></p>
            <h4>{rateContent.title}</h4>
          </div>
          <div>
            {introContent.advantages.map((advantage) =>
              <div key={advantage.id} className={styles.rate_advantage}>
                <img src={check} alt="check" width={24} height={24} />
                {advantage.title}
              </div>
            )}
          </div>
        </div>
        <form className={styles.rate_form}>
          <input
            type="email" id="email" name="email" placeholder="Email" required
            className={styles.rate_email}
          />
          <button className={styles.rate_btn}>{rateContent.button}</button>
        </form>
      </div>
    </section>
  )
}

export default Rate