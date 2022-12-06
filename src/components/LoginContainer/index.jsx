import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
export default function CadastroContainer() {
    return (<div className={styles.containerLogin}>
        <h1>Ivan</h1>
        <img src={faceLogo} alt ="logo facebook"/>
        <Botao cor={'red'} corFundo={'white'} largura={'200px'} texto={'entre aqui'}/>
    </div>)
}