import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";



import { IconContext } from "react-icons";


import styles from "./styles.module.scss"

export default function Footer() {
    return (
        <div className={styles.footercontainer}>
            <div className={styles.subcontainer}>
                <div className={styles.subgrup1}>
                    
                    <IconContext.Provider value={{ color: "#FFFFFF", size: "33px"}}>
                            <div style={{borderRadius: "10px",marginBottom:"30px",whiteSpace: "nowrap", display: "flex" ,alignItems:" center"}}>
                                <AiFillCode  /><span className={styles.subgruptitle}>Digital Store</span>
                            </div>
                        </IconContext.Provider> 
                    <div style={{maxWidth:"307px"}}>
                    <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</span>
                    </div>
                    <div className={styles.subgrupicons}>
                    <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <FaFacebookF />
                            </div>
                        </IconContext.Provider>

                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <BsInstagram />
                            </div>
                        </IconContext.Provider>

                        <IconContext.Provider value={{ color: "#FFFFFF", size: "20px" }}>
                            <div>
                                <BsTwitter />
                            </div>
                        </IconContext.Provider>

                  
                    </div>

                </div>

                <div className={styles.subgrup2}>

                    <div className={styles.subgruplists}>
                        <h3 className={styles.subtitle}>
                            Informações
                        </h3 >
                        <ul >
                            <li>Sobre Drip Store</li>
                            <li>Segurança</li>
                            <li>Wishlist</li>
                            <li>Blog</li>
                            <li>Trabalhe conosco</li>
                            <li>Meus Pedidos</li>
                        </ul>
                    </div>
                    <div className={styles.subgruplists}>
                        <h3 className={styles.subtitle} >
                            Categorias
                        </h3 >
                        <ul>
                            <li>Camisetas</li>
                            <li>Calças</li>
                            <li>Bonés</li>
                            <li>Headphones</li>
                            <li>Tênis</li>
                        </ul>
                    </div>


                </div>

                <div className={styles.subgrup3}>
                    <h3 className={styles.subtitle}>
                        Contato
                    </h3>  <div style={{maxWidth:"307px"}}>
                    <span>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</span>
                    </div>  <div style={{maxWidth:"307px"}}>
                    <div className={styles.phone}>(85) 3051-3411</div>
                    </div>

                </div>

            </div>

            <hr />
            <div className={styles.copyright}>
                <span>&copy; 2022 Digital college</span>
            </div>
        </div>
    )
}