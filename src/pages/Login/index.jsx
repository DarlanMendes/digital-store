import LoginContainer from '../../components/LoginContainer'
import styles from './styles.module.scss'

export default function Login(){
    return(
        <div className={styles.loginPage}>
          <LoginContainer/>
        </div>
    )
}