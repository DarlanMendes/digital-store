import estilo from './styles.module.scss'
import img from './assets/White-Sneakers-PNG-Clipart 2.svg'
import Botao from '../../components/Botao'
import { Link } from 'react-router-dom'
export default function FinalizarCompraResumo() {

    return (
        <div className={estilo.container}>
            <div className={estilo.titulo}>
                RESUMO
            </div>
            <hr />
            <div className={estilo.produtos}>
                <div className={estilo.imgProduto}>
                    <img src={img} />
                </div>
                <div className={estilo.nomeProduto}>
                    Tênis Nike Revolution 6 Next Nature Masculino
                </div>
            </div>
            <hr />
            <div className={estilo.subtotal}>
                <label>Subtotal:</label>
                <div>
                    R$ 219,00
                </div>
            </div>
            <div className={estilo.frete}>
                <label>Frete:</label>
                <div>
                    R$ 0,00
                </div>
            </div>
            <div className={estilo.desconto}>
                <label>Desconto:</label>
                <div>
                    R$ 30,00
                </div>
            </div>
            <div className={estilo.total}>
                <div className={estilo.divValor}>
                    <div className={estilo.tituloTotal}>
                        Total
                    </div>
                    <div className={estilo.valor}>
                        R$ 219,00
                    </div>
                </div>
                <div className={estilo.parcelamento}>
                    ou 10x de R$ 21,00 sem juros
                </div>
            </div>
            <div>
                <Link to='/comprafinalizada'>
                    <div className={estilo.botao}>
                        <Botao cor={'white'} corFundo={'#F6AA1C'} largura={'100%'} altura={'50px'} texto={'Realizar Pagamento'} />
                    </div>
                </Link>
            </div>
        </div>)

}