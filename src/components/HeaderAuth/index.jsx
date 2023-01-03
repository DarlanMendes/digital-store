import styles from './styles.module.scss'
import logo from '../../assets/images/logo.png'
export default function HeaderAuth( ){
    return(<div className={styles.containerPrincipal}>
        <img src={logo} alt='logo digital store'/>
        <h2>Digital College</h2>
    </div>)
}