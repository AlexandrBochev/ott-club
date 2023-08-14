import styles from './Button.module.scss'

interface IButton {
  name: string
  red?: boolean
}

const Button = ({name, red = false}: IButton) => {
  const styleBtn = red ? styles.red_btn : styles.btn

  return (
    <button className={styleBtn}>{name}</button>
  )
}

export default Button