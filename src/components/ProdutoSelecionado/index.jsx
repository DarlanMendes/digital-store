import estilo from './styles.module.scss'
import SliderProduto from '../../components/SliderProdutosSelec'
import DescricaoProduto from '../../components/DescriçãoProdutoSelecionado'
import ProdutoCard from '../../components/ProdutoCard'
export default function ProdutoHome() {
    return (
        <div className={estilo.container}>
            <div className={estilo.caminho}>
            Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
            </div>
            <div className={estilo.produto}>
                <div>
                    <SliderProduto />
                </div>
                <div >
                    <DescricaoProduto />
                </div>
            </div>
            <div className={estilo.relacionados}>
                    <div className={estilo.containerTitulo}>
                        <div className={estilo.Titulo}>
                            Produtos Relacionados
                        </div>
                        <a href="">Ver todos -{">"}</a>
                    </div>
                <div className={estilo.produtosRelacionados}>
                    <ProdutoCard />
                    <ProdutoCard />
                    <ProdutoCard />
                    <ProdutoCard />
                </div>
            </div>
        </div>

    )
}