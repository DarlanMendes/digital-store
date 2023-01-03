import styles from './styles.module.scss';
import InformacoesPessoais from '../InformacoesPessoais';
import InformacoesEntrega from '../InformacoesEntrega';
import Botao from '../Botao';

export default function CriarConta() {
    
    return (
        <div className={styles.cadastroContainer}>
            <h1 className={styles.tituloContainer}>Criar Conta</h1>
            <InformacoesPessoais />
            <InformacoesEntrega />
            <div className={styles.checkContainer}>
                <label>
                    <input type="checkbox" className={styles.check}/>
                    <span>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a intenção do cliente.</span>
                </label>
            </div>
            <div className={styles.Botao}>
                <Botao texto={"Criar Conta"} largura={"750px"} corFundo={"#C92071"} altura={"48px"}/>
            </div>
            

        </div>
    )
}