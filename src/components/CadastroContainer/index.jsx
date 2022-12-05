import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
export default function CadastroContainer() {
    return (<div className={styles.containerCadastro}>
        <div className='subcontainerPrincipal'>
<<<<<<< HEAD
            <h1>Crie sua conta</h1>
            <p className='conviteAoCadastro'>Já possui uma conta? Entre <u>aqui</u>.</p>
            <p className='emailComAsterisco'>Email *</p>
            <input type="text" className='campoDeDigitacaoDoEmail' placeholder='Insira seu email' />
            <Botao cor={'white'} corFundo={'#C92071'} largura={'255px'} altura={'48px'} texto={'Criar Conta'} />
        </div>
        <div className='subcontainerSecundario'>
            {/* <img src={faceLogo} alt="logo facebook" /> */}
=======
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
>>>>>>> b1ab08152c2209779ee98e10080cdd102adc9cb5
        </div>

    </div>)
}                                                                                                          