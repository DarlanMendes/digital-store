import styles from './styles.module.scss'
import InformacoesPessoais from '../FinalizarCompraInformacoesPessoais'
import InformacoesDeEntrega from '../FinalizarCompraInformacoesEntrega'
import InformacoesPagamento from '../InformacoesPagamento'
import FinalizarCompra from '../FinalizaCompra'
import ResumoDoPedido from '../FinalizarCompraResumo'

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.colunaInformacoes}>
                    <div className={styles.titulo}>
                        Finalizar Compra
                    </div>
                    <div className={styles.InformacoesPessoais}>
                        <InformacoesPessoais />
                    </div>
                    <div className={styles.InformacoesDeEntrega}>
                        <InformacoesDeEntrega />
                    </div>
                    <div className={styles.InformacoesPagamento}>
                        <InformacoesPagamento />
                    </div>
                    <div className={styles.FinalizarCompra}>
                        <FinalizarCompra />
                    </div>
                </div>
                <div className={styles.colunaResumo}>
                    <div>
                        <ResumoDoPedido />
                    </div>
                </div>
                <div className={styles.FinalizarCompraMedia}>
                <FinalizarCompra />
                </div>
            </div>

        </div>
    )
}