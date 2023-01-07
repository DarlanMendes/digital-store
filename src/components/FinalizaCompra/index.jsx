import estilo from './styles.module.scss'
import Botao from '../Botao'
import { Link } from 'react-router-dom'
export default function FinalizarCompra() {
    return (
        <div className={estilo.container}>
            <div className={estilo.titulo}>
                Finalizar Compra
            </div>
            <hr />
            <div className={estilo.total}>
                <div className={estilo.tituloTotal}>
                    Total
                </div>
                <div className={estilo.divValor}>
                    <div className={estilo.valor}>
                        R$ 219,00
                    </div>
                    <div className={estilo.parcelamento}>
                        ou 10x de R$ 21,00 sem juros
                    </div>
                </div>
            </div>
            <div className={estilo.botao}>
                <Link to="/comprafinalizada">
                    <Botao cor={'white'}
                        corFundo={'#F6AA1C'}
                        largura={'100%'} altura={'50px'}
                        texto={'Realizar Pagamento'} />
                </Link>
            </div>
        </div>

    )
}

