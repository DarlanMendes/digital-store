//import tenis from './Images/tenis.png'
import estilo from './styles.module.scss'
import { Link } from 'react-router-dom'
export default function ProdutoHome(props) {
    console.log(props, 'props')
    return (

        <div className={estilo.ProdutoGeral}>
            <Link to={"/produtos/" + props.produto?.id}>
                <div className={estilo.Produto}>
                    <div className={estilo.caixaImagem}>
                        <img src={props.produto?.img} alt="" className={estilo.ImagemProduto} />
                    </div>
                    <div className={estilo.TipoProduto}>
                        {props.produto?.categoria}
                    </div>
                    <div className={estilo.NomeProduto}>
                       {props.produto?.descricao}
                    </div>
                    <div className={estilo.PrecoProduto}>
                        ${props.produto?.valor}
                    </div>
                </div>
            </Link>
        </div>


    )
}