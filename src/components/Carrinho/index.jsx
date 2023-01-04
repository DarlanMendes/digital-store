import { BsCartDash } from 'react-icons/bs'
import styles from './styles.module.scss'
import { IconContext } from "react-icons";
import { useState, useEffect } from 'react';
import tenisAdicionado from '../../assets/images/tenis-prod-adic.png'
import Botao from '../Botao';
import { Link } from 'react-router-dom';
export default function Carrinho() {
    const [comprasAdicionadas, setComprasAdicionadas] = useState([]);
    const [abrirCarrinho, setAbrirCarrinho] = useState(false);
    
    const [valorTotal,setValorTotal] = useState(0)
    let total =0;
    let compras = [{ imgProd: tenisAdicionado, textProdTitle: "Tênis Nike Revolution", commentProd:"6 Next Nature Masculino", precoAtual: " 219,00", precoAnterior: " 219,00" },
    { imgProd: tenisAdicionado, textProdTitle: "Tênis Nike Revolution", commentProd:"6 Next Nature Masculino", precoAtual: " 229,00", precoAnterior: " 219,00" }];
    useEffect(() => {
        total =0;
        setComprasAdicionadas(compras);
        compras.forEach((compra)=>{
            total = total+eval((compra.precoAtual).replace(',','.'))
            
        })
        setValorTotal(total.toFixed(2).replace('.',','));
    }, [])
    
    return (
        <IconContext.Provider value={{ className: styles.carrinho }} >
            <div onClick={() => setAbrirCarrinho(!abrirCarrinho)}>
                <div className={styles.qtdComprasAdicionadas} >
                    <span>
                        {comprasAdicionadas.length}
                    </span>
                </div>
                <BsCartDash />
                {abrirCarrinho &&
                    <div className={styles.carrinhoPopUp}>
                        <div className={styles.titlePopUp}>
                            <h2> Meu Carrinho</h2>
                        </div>
                        {comprasAdicionadas && comprasAdicionadas.map((compra, index) => (
                            <div key={index} className={styles.cardProd}>
                                <div className={styles.imgContainer}>
                                    <img src={compra.imgProd} alt="produto selecionado" />
                                </div>
                                <div className={styles.textContainer}>
                                    <h3>{compra.textProdTitle}</h3>
                                    <h3> {compra.commentProd}</h3>
                                    <div className={styles.precoContainer}>
                                        <span className={styles.precoAtual}>R${compra.precoAtual}</span>
                                        <span className={styles.precoAnterior}>R${compra.precoAnterior}</span>
                                    </div>
                                </div>
                                
                            </div>))}
                            <div className={styles.valorTotal}>
                                    <h3>Valor total:</h3>
                                    <span>R$ {valorTotal}</span>
                            </div>
                            <div className={styles.containerBotoes}>
                                <button className={styles.botao}>Esvaziar</button>
                               <Link to='/produtos/carrinho'> <Botao corFundo={'#C92071'} largura={'124.78px'} texto={'Ver Carrinho'}/></Link>
                            </div>
                    </div>

                }
               
            </div>
        </IconContext.Provider>
    )
}