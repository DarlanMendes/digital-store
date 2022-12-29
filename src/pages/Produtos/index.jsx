import estilo from './styles.module.scss'
import Filtrar from '../../components/MenuFiltrar'
import Produtos from '../../components/ProdutoCard'
import Ordenar from '../../components/MenuOrdenar'
export default function ProdutoHome() {
    return (
        <div className={estilo.teste}>
            <div className={estilo.container}>
                <div className={estilo.Ordenar}>
                    <Ordenar />
                </div>
                <div className={estilo.containerProdutos}>
                    <div className={estilo.menuFiltrar}>
                        <Filtrar />
                    </div>
                    <div className={estilo.produtos}>
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                        <Produtos />
                    </div>

                </div>
            </div>
        </div>
    )
}