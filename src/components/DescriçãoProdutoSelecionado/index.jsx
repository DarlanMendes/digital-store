import estilo from './styles.module.scss'
import botao from '../../components/Botao'
import Botao from '../../components/Botao'
import { useState } from "react"
import { Link } from 'react-router-dom'
export default function ProdutoHome() {

    let cores = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];
    let tamanhos = ["39", "40", "41", "42", "43"]

    const [selecionado, setSelecionado] = useState(0)
    const [numero, setNumero] = useState(0)

    return (
        <div className={estilo.container}>
            <div className={estilo.nomeProduto}>
                Tênis Nike Revolution 6 Next Nature Masculino
            </div>
            <div className={estilo.referencias}>
                <span>Casual</span>
                <span>| Nike</span>
                <span>| REF:38416711</span>
            </div>
            <div className={estilo.avaliacoes}>
                <div className={estilo.estrelas}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg>
                </div>
                <div className={estilo.mediaAvaliacao}>
                    <span>4.7</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                </div>
                <div className={estilo.totalAvaliacoes}>
                    (90 avaliações)
                </div>
            </div>
            <div className={estilo.preco}>
                <label>R$</label>
                <span className={estilo.precoFinal}>219</span>
                <label className={estilo.precoFinal}>,00</label>
                <span className={estilo.precoDesconto}>219,00</span>
            </div>
            <div className={estilo.descricaoProduto}>
                <label>Descrição do produto</label>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </div>
            </div>
            <div className={estilo.tamanhoProduto}>
                <label>Tamanho</label>
                <div className={estilo.botoesTamanho}>
                    {
                        tamanhos && tamanhos.map((tamanho, index) => (
                            <div key={index} >
                                <button style={numero === index ? { backgroundColor: "#C92071", border: "none", color: "#FFFFFF" } : { backgroundColor: "white" }} onClick={() => {
                                    setNumero(index)
                                }}>{tamanho}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={estilo.cores}>
                <label>Cores</label>
                <div className={estilo.botoesCores}>
                    {
                        cores && cores.map((cor, index) => (
                            <div className={estilo.cor} key={index} style={selecionado === index ? { border: "2px solid #C92071" } : { border: "none" }}>
                                <button onClick={() => {
                                    setSelecionado(index)
                                }} style={{ backgroundColor: cor }}></button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Link to='/produtos/carrinho'>
                <div className={estilo.botaoNormal}>
                    < Botao cor={'#F5F5F5'} corFundo={'#FFB31F'} largura={'220px'} altura={'48px'} texto={'COMPRAR'} />
                </div>
            </Link>
            <Link to='/produtos/carrinho'>
                <div className={estilo.botaoMedia}>
                    < Botao cor={'#F5F5F5'} corFundo={'#FFB31F'} largura={'335px'} altura={'48px'} texto={'COMPRAR'} />
                </div>
            </Link>
        </div>

    )
}

