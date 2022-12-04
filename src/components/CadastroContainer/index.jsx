import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
export default function CadastroContainer() {
    return (<div className={styles.containerCadastro}>
        <div className='subcontainerPrincipal'>
            <h1>Acesse sua conta</h1>
            <p className='conviteAoCadastro'>Novo cliente? Então registre-se <u>aqui</u>.</p>        
            <p className='textoDoLogin'>Login *</p>
            <span className='retanguloDoLogin'>
                <input type="text" placeholder='Insira seu login ou email' />
            </span>
        </div>
        <div className='subcontainerSecundario'>
            <img src={faceLogo} alt="logo facebook" />
            <Botao cor={'red'} corFundo={'blue'} largura={'200px'} texto={'entre aqui'} />
        </div>

    </div>)
}