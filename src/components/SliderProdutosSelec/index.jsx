import estilo from './styles.module.scss'
import img from './assets/White-Sneakers-PNG-Clipart 2.png'
import { useState } from "react"
export default function ProdutoHome() {

    let imagens = [{ tenis: { img }, bc: "#E2E3FF" },
    { tenis: { img }, bc: "#FFC0BC" },
    { tenis: { img }, bc: "#DEC699" },
    { tenis: { img }, bc: "#E8DFCF" },
    { tenis: { img }, bc: "#E8DFCF" }
    ]

    const [imagem, setImagem] = useState(0)

    return (
        <div>
            <div className={estilo.container}>
                <div className={estilo.imgPrincipal}>
                    <button className={estilo.normalLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button className={estilo.mediaLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#474747" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <img src={img} />
                    <button className={estilo.normalRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" fill="#474747" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    <button className={estilo.mediaRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="#474747" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <div className={estilo.imgSecundarias}>
                    {
                        imagens && imagens.map((imagemProd, index) => (
                            <div className={estilo.img} key={index} style={imagem === index ? { border: "1px solid #C92071", backgroundColor: imagemProd.bc } : { backgroundColor: imagemProd.bc, border: "none" }}>
                                <div style={imagem === index ? { boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.05)" } : { border: "none" }}>
                                    <img src={img} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >

    )
}