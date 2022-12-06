import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
export default function CadastroContainer() {
    return (<div className={styles.containerCadastro}>
        <h1>Antonio</h1>
        <img src={faceLogo} alt ="logo facebook"/>
        <Botao cor={'red'} corFundo={'blue'} largura={'200px'} texto={'entre aqui'}/>
    </div>)
}