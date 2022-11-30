import { BsCartDash } from 'react-icons/bs'
import styles from './styles.module.scss'
import { IconContext } from "react-icons";
import { useState } from 'react';
export default function Carrinho() {
    const [comprasAdicionadas,setComprasAdicionadas] = useState(0);
    console.log(comprasAdicionadas)
    return (
        <IconContext.Provider value={{ className: styles.carrinho }}>
            <div>
                <div className={styles.qtdComprasAdicionadas}>
                    <span>
                      {comprasAdicionadas}
                    </span>
                </div>
                <BsCartDash />
            </div>
        </IconContext.Provider>
    )
}