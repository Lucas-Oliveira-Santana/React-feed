import styles from "./Header.module.css"
import IgniteLogo from "../assets/Ignite-logo.svg"

export function Header(){
  return(
    <header className={styles.header}>
    {/* <strong>Ignite Feed</strong> */}
    <img src={IgniteLogo} alt="Logo do Ignite" />
    </header>
  )
}