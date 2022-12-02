import logo from '../../assets/images/logo.png'
import styles from './styles.module.scss'
import { CiSearch } from 'react-icons/ci'
import { IconContext } from "react-icons";
import NavLink from "../NavLink";
import Botao from "../Botao";
import Carrinho from "../Carrinho"

export default function Header() {

        return (
        
        
                <div className={styles.centralizar}>


                        <div className={styles.containerHeader}>

                                <div className={styles.topoHeader}>
                                        <div className={styles.imgContainer}>
                                                <img src={logo} alt="" className={styles.imagemLogo} />
                                                <div className={styles.tituloLogo}>
                                                        Digital Store
                                                </div>
                                        </div>

                                        <div className={styles.inputContainer}>
                                                <input type="text" className={styles.inputBuscaHome} placeholder="Pesquisar produto..." />
                                                <IconContext.Provider value={{ color: "rgb (102,102,102)", className: styles.icon }}>
                                                        <div>
                                                                <CiSearch />
                                                        </div>
                                                </IconContext.Provider>
                                        </div>
                                        <div className={styles.botoesContainer}>

                                                <div className={styles.divCadastro}>
                                                        Cadastre-se
                                                </div>

                                                <div className={styles.divBotaoEntrar}>
                                                        <Botao corFundo="#C92071" texto="Entrar" largura="7.87vw" />
                                                </div>

                                                <div className={styles.Carrinho}>
                                                        <Carrinho />
                                                </div>

                                        </div>
                                </div>
                                <div className={styles.divNavLink}>
                                        <NavLink />
                                </div>
                        </div>
                </div>)
}

