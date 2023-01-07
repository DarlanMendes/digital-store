import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'
import gmailLogo from '../../assets/images/gmail-logo.png'



export default function CadastroContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [widthButton, setWidthButton] = useState('')

    useEffect(() => {
        checkSize()
    })



    window.addEventListener("resize", () => {
        checkSize()
    })

    const checkSize = () => {
        if (window.innerWidth < 500) {
            setWidthButton('255px');
        } else {
            setWidthButton('523px');
        }
    }


    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,
            password,
        };

        console.log(user)
        // dispatch(login(user));
    };


    return (<div className={styles.containerLogin}>

        <h1 className={styles.textMain}>Acesse sua conta</h1>
        <h3 className={styles.textSubMain}>Novo cliente? Então registre-se <span className={styles.underscore}>aqui.</span></h3>
        <form onSubmit={handleSubmit}>
            <h3 className={styles.indicativeText}>Login *</h3>
            <input type="email" value={email} className={styles.inputLogin} required onChange={(e) => { handleChange(e) }} placeholder='Insira seu login ou email' />
            <h3 className={styles.indicativeText}>Senha *</h3>
            <input type="password" value={password} className={styles.inputLogin} required onChange={(e) => { handlePasswordChange(e) }} placeholder='Insira sua senha' />
            <h3 className={styles.helpPassword}>Esqueci minha senha</h3>
            <Botao cor={'white'} corFundo={'#C92071'} largura={widthButton} texto={'Acessar conta'} altura={'48px'} />
        </form>
        <div className={styles.containerLoginAlternative}>
            <div className={styles.divAlternative} >
                <h3 className={styles.textLoginAlternative}>Ou faça login com</h3>
            </div>
            <div className={styles.divLogoAlternative} >
                <img src={gmailLogo} className={styles.logoImg} alt="" />
                <img src={faceLogo} alt="" />
            </div>
        </div>

    </div>)
}