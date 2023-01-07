import logo from '../../assets/images/logo.png'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import {AiOutlineUser} from 'react-icons/ai'
import { IconContext } from "react-icons";
import NavLink from "../NavLink";
import Botao from "../Botao";
import Carrinho from "../Carrinho"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../App';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
        const usuario = useContext(AuthContext);
        const [logado, setLogado] = useState(false);


        useEffect(() => {
                if (usuario.currentUser.nome !== '') {
                        setLogado(true)
                } else {
                        setLogado(false)
                }
        }, [usuario])

        return (


                <div className={styles.centralizar}>


                        <div className={styles.containerHeader}>
                        <IconContext.Provider value={{ color: "rgb (102,102,102)", className: styles.icon }}>
                                <div className={styles.topoHeader}>
                                        <div className={styles.imgContainer}>
                                                <img src={logo} alt="" className={styles.imagemLogo} />
                                                <div className={styles.tituloLogo}>
                                                        Digital Store
                                                </div>
                                        </div>

                                        <div className={styles.inputContainer}>
                                                <input type="text" className={styles.inputBuscaHome} placeholder="Pesquisar produto..." />
                                                
                                                        <div>
                                                                <CiSearch />
                                                        </div>
                                               
                                        </div>
                                        <div className={styles.botoesContainer} style={logado?{flexDirection:"row-reverse",width:"198.25px",justifyContent:"space-between"}:{flexDirection:"row"}}>


                                                {logado ? <div className={styles.usuarioLogado} >
                                               
                                                        <AiOutlineUser className={styles.usuarioIcon}/>
                                                
                                                 <h3>Olá , {usuario.currentUser.nome}</h3>
                                                </div> :
                                                        <>
                                                                <div className={styles.divCadastro}>
                                                                        <Link to={"/cadastro"}>
                                                                                Cadastre-se
                                                                        </Link>
                                                                </div>
                                                                <Link to="/login">
                                                                        <div className={styles.divBotaoEntrar}>
                                                                                <Botao corFundo="#C92071" texto="Entrar" largura="7.87vw" />
                                                                        </div>
                                                                </Link>

                                                        </>
                                                }
                                                <div className={styles.Carrinho} >
                                                        <Carrinho />
                                                </div>





                                        </div>
                                </div>
                                <div className={styles.divNavLink}>
                                        <NavLink />
                                </div>
                        </IconContext.Provider>
                        </div>
                </div>)
}

