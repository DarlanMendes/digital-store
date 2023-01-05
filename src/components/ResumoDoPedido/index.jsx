import estilo from './styles.module.scss'
import Botao from '../Botao'
import { Link } from 'react-router-dom'
export default function ResumoDoPedido() {
    return (<div>
        <div className={estilo.containerGeral}>

            <div className={estilo.container}>
                <div className={estilo.containerValores}>
                    <label htmlFor="">RESUMO</label>
                    <hr />
                    <div className={estilo.subtotal}>
                        <label htmlFor="">Subtotal</label>
                        <div>R$ 219,00</div>
                    </div>
                    <div className={estilo.frete}>
                        <label htmlFor="">Frete</label>
                        <div>R$ 0,00</div>
                    </div>
                    <div className={estilo.desconto}>
                        <label htmlFor="">Desconto</label>
                        <div>R$ 30,00</div>
                    </div>
                    <div className={estilo.total}>
                        <label htmlFor="">Total</label>
                        <div>R$ 219,00</div>
                    </div>
                    <div className={estilo.parcelamento}> ou 10x de R$ 21,00 sem juros</div>
                    <Link to={'/finalizarcompra'}>
                        <div className={estilo.botao}>
                            <Botao cor={'#F5F5F5'} corFundo={'#F6AA1C'} largura={'274px'} altura={'40px'} texto={'Continuar'} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className={estilo.containerTotal}>
                <div className={estilo.totalComBotao}>
                    <div className={estilo.total}>
                        <label htmlFor="">Total</label>
                        <div>R$ 219,00</div>
                    </div>

                    <div className={estilo.parcelamento}> ou 10x de R$ 21,00 sem juros</div>


                    <Link to={'/finalizarcompra'}>
                        <div className={estilo.botao} onClick={() => { console.log('clicou') }}>
                            <Botao cor={'#F5F5F5'} corFundo={'#F6AA1C'} largura={'calc(100%)'} altura={'40px'} texto={'Continuar'} />
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    </div>)
}