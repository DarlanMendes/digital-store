import estilo from './styles.module.scss'
import Resumo from '../../components/ResumoDoPedido'
import Carrinho from '../../components/MeuCarrinho'
import Produto from '../../components/ProdutoCard'

export default function MeusPedidos() {
    return (
        <div className={estilo.container}>
            <div className={estilo.meuCarrinho}>
                <div className={estilo.primeiraLinha}>
                    <div>
                        <Carrinho />
                    </div>
                    <div>
                        <Resumo />
                    </div>
                </div>
                <div className={estilo.segundaLinha}>
                    <div className={estilo.titulo}>
                        Produtos Relacionados
                    </div>
                    <a href="">Ver todos -{">"}</a>
                </div>
                <div className={estilo.terceiraLinha}>
                    <Produto />
                    <Produto />
                    <Produto />
                </div>
            </div>
        </div>
    )
}