import styles from './Header.module.scss'
import logo from '../../assets/svg/ott-clube-logo.svg'
import Button from '../Button/Button'
import { useState } from 'react'
import Facebook from '../Svg/Facebook'
import Telegram from '../Svg/Telegram'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState('')

  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      setIsScrolled(styles.scrolled)
    } else {
      setIsScrolled('')
    }
  }
  
  return (
    <div className='container'>
      <div className={`${styles.header} ${isScrolled}`}>
        <div className={styles.header_bg}></div>
        <nav className={`${styles.header_nav} container`}>
          <a href='/' className={styles.logo}>
            <img src={logo} alt="logo" />
          </a>
          <div className={styles.right_block}>
            <div className={styles.facebook}>
              <Facebook />
            </div>
            <div className={styles.telegram}>
              <Telegram />
            </div>
            <p>Регистрация</p>
            <Button name='Войти' />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header