import styles from './Faq.module.scss'
import FaqBlock from './FaqBlock/FaqBlock'
import { faqContent } from '../../database/content'

const Faq = () => {
  return (
    <section className='container'>
      <div className={styles.faq}>
        <FaqBlock />
      </div>
    </section>
  )
}

export default Faq