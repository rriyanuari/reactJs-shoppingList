import ShoppingIcon from '../../assets/shopping-icon.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return(
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={ShoppingIcon} alt='Shopping Icon' />
      <h1 className={styles.navTitle}>Shopping List</h1>
    </nav>
  )
}

export default Navbar