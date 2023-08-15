import styles from './Button.module.scss'

interface IButton {
  name: string
  red?: boolean
  active?: boolean
}

const Button = ({name, red = false, active = false}: IButton) => {
  let styleBtn = styles.btn

  if (red) {
    styleBtn = styles.red_btn
  }

  if (active) {
    styleBtn = styles.active_btn
  }

  return (
    <button className={styleBtn}>{name}</button>
  )
}

export default Button