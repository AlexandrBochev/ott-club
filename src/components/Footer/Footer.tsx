import styles from './Footer.module.scss'
import telegram from '../../assets/svg/logos_telegram.svg'
import whatsapp from '../../assets/svg/logos-whatsapp.svg'
import visa from '../../assets/svg/visa.svg'
import masterCard from '../../assets/svg/master-card.svg'
import freeKassa from '../../assets/svg/free-kassa.svg'
import paysera from '../../assets/svg/paysera.svg'
import sepa from '../../assets/svg/sepa.svg'

const Footer = () => {
  return (
    <footer className='container'>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_about}>
            <p>
              О нас<br/>
              Пользовательское соглашение<br/>
              Политика конфиденциальности<br/>
              ТВ-Каналам<br/>
            </p>
            <p>
              Проверка скорости<br/>
              Правила оформления подписки<br/>
            </p>
          </div>
          <div className={styles.footer_help}>
            <div className={styles.help_wrapper}>
              <div className={styles.help_contacts}>
                <h5>Помощь</h5>
                <p>
                  <a href="tel:+442045772169" target='_self'>+442045772169 (Англия)<br/></a>
                  <a href="tel:+420255708953" target='_self'>+420255708953 (Европа)<br/></a>
                  <a href="tel:+97233751723" target='_self'>+97233751723 (Израиль)<br/></a>
                  <a href="mailto:support@ottclub.cc">support@ottclub.cc<br/></a>
                </p>
              </div>
              <div className={styles.help_chat}>
                <p>Чат-поддержка</p>
                <div className={styles.chat_social}>
                  <a href="https://t.me/ottclubnews" target='_blank' className={styles.telegram}>
                    <img src={telegram} alt="tilegram" width={40} height={40} />
                  </a>
                  <a href="#">
                    <img src={whatsapp} alt="tilegram" width={40} height={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_logos}>
          <a href="https://www.visa.com.ua/uk_UA" target='_blank'>
            <img src={visa} alt="Visa" width={84} height={40} />
          </a>
          <a href="https://www.mastercard.ua/uk-ua.html" target='_blank'>
            <img src={masterCard} alt="Master Card" width={70} height={40} />
          </a>
          <a href="https://www.free-kassa.ru/news.php?id=149" target='_blank'>
            <img src={freeKassa} alt="Free Kassa" width={115} height={40} />
          </a>
          <a href="https://www.paysera.com/v2/ru-UA/index" target='_blank'>
            <img src={paysera} alt="Paysera" width={130} height={40} />
          </a>
          <a href="https://commission.europa.eu/select-language?destination=/node/1" target='_blank'>
            <img src={sepa} alt="Sepa" width={82} height={40} />
          </a>
        </div>
        <div className={styles.footer_copyright}>
          <p>&#169; 2021-2022 COMPANY NAME LTD</p>
          <span/>
          <p>Company number 1221514</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer