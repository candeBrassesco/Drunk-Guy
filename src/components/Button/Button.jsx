// el import que aparece al crear un componente con rafce no es necesario desde
// la versión 14 de react js en adelante
import styles from "./button.module.css";

const Button = ({texto, saludar}) => {
  return (
    <button className={styles.btn} onClick={saludar}>{texto}</button>
  )
}

export default Button
