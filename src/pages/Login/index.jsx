import LoginContainer from '../../components/LoginContainer'
import styles from './styles.module.scss'
import tenis1 from '../../assets/images/tenislogin1.png'
import tenis2 from '../../assets/images/tenislogin2.png'

export default function Login(){
    return(
        <div className={styles.loginPage}>
          <LoginContainer/>
          <img src={tenis1}   className={styles.tenis1}alt=""/>
          <img src={tenis2} className={styles.tenis2} alt=""/>

        </div>
    )
}