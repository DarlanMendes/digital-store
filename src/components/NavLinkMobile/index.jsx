import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { route } from '../../routes/routes.js'
import {useLocation} from 'react-router-dom';
export default function NavLink() {

    let location = useLocation()
    
    return (
        <ul className={styles.navLinkContainer}>
            {route.map((item, index) => (
                <li key={index} className={styles.navLink}>
                    <Link to={item.route} className={location.pathname===item.route&&styles.rotaAtivada}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}