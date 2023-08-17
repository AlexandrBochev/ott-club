import styles from './Faq.module.scss'
import { faqContent } from '../../database/content'
import arr from '../../assets/svg/arr.svg'
import { motion as m } from "framer-motion"

const Faq = () => {

  return (
    <section className='container'>
      <m.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className={styles.faq_title}>
          Популярные вопросы
      </m.h2>
      <div className={styles.faq}>
        <m.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={styles.faq_block1}>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[0].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[0].answer}</p>
          </div>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[1].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[1].answer}</p>
          </div>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[2].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[2].answer}</p>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          className={styles.faq_block2}>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[3].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[3].answer}</p>
          </div>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[4].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[4].answer}</p>
          </div>
          <div className={styles.faq_block}>
            <div className={styles.question}>
              <h5>{faqContent[5].question}</h5>
              <img src={arr} alt="arr" className={styles.arr} />
            </div>
            <p className={styles.answer}>{faqContent[5].answer}</p>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Faq