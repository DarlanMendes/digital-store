import FinalizarCompra from "../../components/FinalizaCompra";
import InformacoesPagamento from "../../components/InformacoesPagamento";
import FinalizarCompraInformacoesEntrega from "../../components/FinalizarCompraInformacoesEntrega";
import FinalizarCompraInformacoesPessoais from "../../components/FinalizarCompraInformacoesPessoais";
import FinalizarCompraResumo from "../../components/FinalizarCompraResumo";
import styles from "./styles.module.scss";

export default function Compra() {
    return (
        <div className={styles.containerCompra}>
            <h2>Finalizar compra</h2>
            <div className={styles.containerSecundario}>
            
                <div >
                    <FinalizarCompraInformacoesPessoais />
                    <FinalizarCompraInformacoesEntrega />
                    <InformacoesPagamento />
                    <FinalizarCompra />
                </div>
                <FinalizarCompraResumo/>
           
            </div>


        </div>
    )
}