import styles from './Rate.module.scss'
import eye from '../../assets/svg/eye.svg'
import check from '../../assets/svg/check.svg'
import { rateContent } from '../../database/content';
import { introContent } from '../../database/content';
import { motion as m } from "framer-motion"

const Rate = () => {
  return (
    <section className='container'>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4, ease: "easeInOut" }}
        className={styles.rate}
      >
        <img src={eye} alt="eye" width={64} height={68} className={styles.rate_eye} />
        <div className={styles.rate_block}>
          <div className={styles.rate_title}>
            <m.p
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
              className={styles.rate_price}>
                {rateContent.price}<span> / месяц</span>
            </m.p>
            <m.h4
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}>
                {rateContent.title}
            </m.h4>
          </div>
          <div>
            {introContent.advantages.map((advantage) =>
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: advantage.id * 0.2, duration: 0.4, ease: "easeInOut" }}
                key={advantage.id}
                className={styles.rate_advantage}>
                  <img src={check} alt="check" width={24} height={24} />
                  {advantage.title}
              </m.div>
            )}
          </div>
        </div>
        <form className={styles.rate_form}>
          <m.input
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeInOut" }}
            type="email" id="email" name="email" placeholder="Email" required
            className={styles.rate_email}
          />
          <m.button
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
            className={styles.rate_btn}>
              {rateContent.button}
          </m.button>
        </form>
      </m.div>
    </section>
  )
}

export default Rate