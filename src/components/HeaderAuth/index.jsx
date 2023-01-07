import styles from './styles.module.scss'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
export default function HeaderAuth( ){
    return(<div className={styles.containerPrincipal}>
        <img src={logo} alt='logo digital store'/>
      <Link to="/"> <h2>Digital College</h2></Link>
    </div>)
}