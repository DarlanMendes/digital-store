import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import gmailLogo from '../../assets/images/gmail-logo.png'
import Botao from '../Botao'
import {Link} from 'react-router-dom'
import {useState} from 'react'
export default function CadastroContainer() {
    const[email,setEmail]=useState('')
    return (<div className={styles.containerCadastro}>
        <div className={styles.subcontainerPrincipal}>
            <h3 className={styles.criarConta}>Crie sua conta</h3>
            <p className={styles.conviteAoCadastramento1}>Já possui uma conta? Entre <u>aqui</u>.</p>
            <p className={styles.emailComAsterisco}>Email *</p>
           
           <input type="text" className={styles.campoDeDigitacaoDoEmail} 
           placeholder='Insira seu email' onChange={(e)=>{setEmail(e.target.value)}} />
           
           <Link to={'/cadastro/'+email}> 
            <Botao cor={'white'} corFundo={'#C92071'} largura={'100%'} altura={'48px'} texto={'Criar Conta'} />
            </Link>
        </div>
        <div className={styles.subcontainerSecundario}>
            <span>Ou faça login com</span>
            <img src={gmailLogo} className={styles.iconeGmail} alt="logo gmail" />
            <img src={faceLogo} className={styles.iconeFacebook} alt="logo facebook" />
        </div>
    </div>)
}                                                                                