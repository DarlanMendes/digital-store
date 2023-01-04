import React, { useState } from 'react'
import styles from './styles.module.scss'
import faceLogo from '../../assets/images/face-logo.png'
import Botao from '../Botao'



export default function CadastroContainer() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        console.log(email,password)
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
                <Botao cor={'white'} corFundo={'#C92071'} largura={'523px'} texto={'Acessar conta'} altura={'48px'} />
            </form>
            <div>
            <h3 className={styles.textLoginAlternative}>Ou faça login com</h3>
            <img src="" alt="" />
            <img src="" alt="" />
            </div>
       
    </div>)
}