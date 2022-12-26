import estilo from './styles.module.scss'
import ProdutoCard from '../ProdutoCard'
export default function ProdutoHome() {
    return (
        <div className={estilo.containerProdutosEmAlta}>
            <div className={estilo.containerTitulo}>
                <div className={estilo.Titulo}>
                    Produtos em alta
                </div>
                <div className={estilo.TituloII}>
                    Coleções em destaque
                </div>
                <a href="">Ver todos -{">"}</a>
            </div>
            <div className={estilo.containerProdutos}>
                <ProdutoCard id={1} />
                <ProdutoCard />
                <ProdutoCard />
                <ProdutoCard />
                <ProdutoCard />
                <ProdutoCard />
                <ProdutoCard />
                <ProdutoCard />
            </div>
        </div>
    )
}