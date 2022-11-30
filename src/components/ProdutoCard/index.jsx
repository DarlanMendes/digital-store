import tenis from './Images/tenis.png'
import estilo from './styles.module.scss'

export default function ProdutoHome() {
    return (
        <div className={estilo.ProdutoGeral}>
            <div className={estilo.Produto}>
                <div className={estilo.caixaImagem}>
                    <img src={tenis} alt="" className={estilo.ImagemProduto}/>
                </div>
                <div className={estilo.TipoProduto}>
                    Tenis
                </div>
                <div className={estilo.NomeProduto}>
                    K-Swiss V8 - Masculino
                </div>
                <div className={estilo.PrecoProduto}>
                    $100
                </div>
            </div>
        </div>
    )
}